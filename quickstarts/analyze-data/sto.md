---
sidebar_position: 4
id: sto
title: Run scripts on Vantage
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: September 7th, 2021
description: Run Applications on Teradata - use Script Table Operator to run applications on your data without data movement.
keywords: [data warehouses, compute storage separation, teradata, vantage, script table operator, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Run scripts on Vantage

## Overview

Sometimes, you need to apply complex logic to your data that can't be easily expressed in SQL. One option is to wrap your logic in a User Defined Function (UDF). What if you already have this logic coded in a language that is not supported by UDF? Script Table Operator is a Vantage feature that allows you to bring your logic to the data and run it on Vantage. The advantage of this approach is that you don't have to retrieve data from Vantage to operate on it. Also, by running your data applications on Vantage, you leverage its parallel nature. You don't have to think how your applications will scale. You can let Vantage take care of it.

## Prerequisites

You need access to a Teradata Vantage instance.

<ClearscapeDocsNote />

## Hello World

Let's start with something simple. What if you wanted the database to print "Hello World"?

```sql
SELECT *
FROM
  SCRIPT(
    SCRIPT_COMMAND('echo Hello World!')
    RETURNS ('Message varchar(512)'));
```

Here is what I've got:
```sql
Message
------------
Hello World!
Hello World!
```

Let's analyze what just happened here. The SQL includes `echo Hello World!`. This is a Bash command. OK, so now we know how to run Bash commands. But why did we get 2 rows and not one? That's because our simple script was run once on each AMP and I happen to have 2 AMPs:

```sql
-- Teradata magic that returns the number of AMPs in a system
SELECT hashamp()+1 AS number_of_amps;
```

Returns:
```sql
number_of_amps
--------------
             2
```

This simple script demonstrates the idea behind the Script Table Operator (STO). You provide your script and the database runs it in parallel, once for each AMP. This is an attractive model in case you have transformation logic in a script and a lot of data to process. Normally, you would need to build concurrency into your application. By letting STO do it, you let Teradata select the right concurrency level for your data.

## Supported languages

OK, so we did `echo` in Bash but Bash is hardly a productive environment to express complex logic. What other languages are supported then? The good news is that any binary that can run on Vantage nodes can be used in STO. Remember, that the binary and all its dependencies need to be installed on all your Vantage nodes. In practice, it means that your options will be limited to what your administrator is willing and able to maintain on your servers. Python is a very popular choice.

## Uploading scripts

Ok, Hello World is super exciting, but what if we have existing logic in a large file. Surely, you don't want to paste your entire script and escape quotes in an SQL query. We solve the script upload issue with the User Installed Files (UIF) feature.

Say you have `helloworld.py` script with the following content:

```bash
print("Hello World!")
```

Let's assume the script is on your local machine at `/tmp/helloworld.py`.

First, we need to setup permissions in Vantage. We are going to do this using a new database to keep it clean.

```sql
-- Create a new database called sto
CREATE DATABASE STO
AS PERMANENT = 60e6, -- 60MB
    SPOOL = 120e6; -- 120MB

-- Allow dbc user to create scripts in database STO
GRANT CREATE EXTERNAL PROCEDURE ON STO to dbc;
```

You can upload the script to Vantage using the following procedure call:

```python
call SYSUIF.install_file('helloworld',
                         'helloworld.py', 'cz!/tmp/helloworld.py');
```

Now that the script has been uploaded, you can call it like this:

```sql
-- We switch to STO database
DATABASE STO

-- We tell Vantage where to look for the script. This can be
-- any string and it will create a symbolic link to the directory
-- where our script got uploaded. By convention, we use the
-- database name.
SET SESSION SEARCHUIFDBPATH = sto;

-- We now call the script. Note, how we use a relative path that
-- starts with `./sto/`, which is where SEARCHUIFDBPATH
-- is pointing.
SELECT *
FROM SCRIPT(
  SCRIPT_COMMAND('python3 ./sto/helloworld.py')
  RETURNS ('Message varchar(512)'));
```

The last call should return:
```sql
Message
------------
Hello World!
Hello World!
```

That was a lot of work and we are still at Hello World. Let's try to pass some data into `SCRIPT`.

## Passing data stored in Vantage to SCRIPT

So far, we have been using `SCRIPT` operator to run standalone scripts. But the main purpose to run scripts on Vantage is to process data that is in Vantage. Let's see how we can retrieve data from Vantage and pass it to `SCRIPT`.

We will start with creating a table with a few rows.

```sql
-- Switch to STO database.
DATABASE STO

-- Create a table with a few urls
CREATE TABLE urls(url varchar(10000));
INS urls('https://www.google.com/finance?q=NYSE:TDC');
INS urls('http://www.ebay.com/sch/i.html?_trksid=p2050601.m570.l1313.TR0.TRC0.H0.Xteradata+merchandise&_nkw=teradata+merchandise&_sacat=0&_from=R40');
INS urls('https://www.youtube.com/results?search_query=teradata%20commercial&sm=3');
INS urls('https://www.contrivedexample.com/example?mylist=1&mylist=2&mylist=...testing');
```

We will use the following script to parse out query parameters:

```python
from urllib.parse import urlparse
from urllib.parse import parse_qsl
import sys

for line in sys.stdin:
    # remove leading and trailing whitespace
    url = line.strip()
    parsed_url = urlparse(url)
    query_params = parse_qsl(parsed_url.query)

    for element in query_params:
        print("\t".join(element))
```

Note, how the scripts assumes that urls will be fed into `stdin` one by one, line by line. Also, note how it prints results line by line, using the tab character as a delimiter between values.

Let's install the script. Here, we assume that the script file is at `/tmp/urlparser.py` on our local machine:
```python
CALL SYSUIF.install_file('urlparser',
	'urlparser.py', 'cz!/tmp/urlparser.py');
```

With the script installed, we will now retrieve data from `urls` table and feed it into the script to retrieve query parameters:
```sql
-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/
SET SESSION SEARCHUIFDBPATH = sto ;

SELECT *
  FROM SCRIPT(
    ON(SELECT url FROM urls)
    SCRIPT_COMMAND('python3 ./sto/urlparser.py')
    RETURNS ('param_key varchar(512)', 'param_value varchar(512)'));
```

As a result, we get query params and their values. There are as many rows as key/value pairs. Also, since we inserted a tab between the key and the value output in the script, we get 2 columns from STO.
```sql
param_key   |param_value
-----------------------------------------------------------------
q           |NYSE:TDC
_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise
search_query|teradata commercial
_nkw        |teradata merchandise
sm          |3
_sacat      |0
mylist      |1
_from       |R40
mylist      |2
mylist      |...testing
```

## Inserting SCRIPT output into a table

We have learned how to take data from Vantage, pass it to a script and get output. Is there an easy way to store this output in a table? Sure, there is. We can combine the select above with `CREATE TABLE` statement:

```sql
-- We inform Vantage to create a symbolic link from the UIF directory to ./sto/
SET SESSION SEARCHUIFDBPATH = sto ;

CREATE MULTISET TABLE
    url_params(param_key, param_value)
AS (
    SELECT *
    FROM SCRIPT(
      ON(SELECT url FROM urls)
      SCRIPT_COMMAND('python3 ./sto/urlparser.py')
      RETURNS ('param_key varchar(512)', 'param_value varchar(512)'))
) WITH DATA
NO PRIMARY INDEX;
```

Now, let's inspect the contents of `url_params` table:

```sql
SELECT * FROM url_params;
```

You should see the following output:
```sql
param_key   |param_value
------------+-----------------------------------------------------
q           |NYSE:TDC
_trksid     |p2050601.m570.l1313.TR0.TRC0.H0.Xteradata merchandise
search_query|teradata commercial
_nkw        |teradata merchandise
sm          |3
_sacat      |0
mylist      |1
_from       |R40
mylist      |2
mylist      |...testing
```

## Summary

In this quick start we have learned how to run scripts against data in Vantage. We ran scripts using Script Table Operator (STO). The operator allows us to bring logic to the data. It offloads concurrency considerations to the database by running our scripts in parallel, one per AMP. All you need to do is provide a script and the database will execute it in parallel.

## Further reading
* [Teradata Vantage™ - SQL Operators and User-Defined Functions - SCRIPT](https://docs.teradata.com/r/9VmItX3V2Ni9Ts70HbDzVg/CBAaRxUyOdF0t1SQIuXeug)
* [R and Python Analytics with SCRIPT Table Operator](https://docs.teradata.com/v/u/Orange-Book/R-and-Python-Analytics-with-SCRIPT-Table-Operator-Orange-Book-4.3.1)

<CommunityLink />
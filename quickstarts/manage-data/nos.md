---
id: nos
sidebar_position: 1
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: September 7th, 2021
description: Teradata Vantage Native Object Storage - read and write from/to object storage, unified SQL interface for Vantage and object storage.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Query data stored in object storage

## Overview

Native Object Storage (NOS) is a Vantage feature that allows you to query data stored in files in object storage such as AWS S3, Google GCS, Azure Blob or on-prem implementations. It's useful in scenarios where you want to explore data without building a data pipeline to bring it into Vantage.

## Prerequisites

You need access to a Teradata Vantage instance. NOS is enabled in all Vantage editions from Vantage Express through Developer, DYI to Vantage as a Service starting from version 17.10.

<ClearscapeDocsNote />

## Explore data with NOS

:::note
Currently, NOS supports CSV, JSON (as array or new-line delimited), and Parquet data formats.
:::

Let's say you have a dataset stored as CSV files in an S3 bucket. You want to explore the dataset before you decide if you want to bring it into Vantage. For this scenario, we are going to use a public dataset published by Teradata that contains river flow data collected by the
U.S. Geological Survey. The bucket is at https://td-usgs-public.s3.amazonaws.com/.

Let's first have a look at sample CSV data. We take the first 10 rows that Vantage will fetch from the bucket:

```sql
SELECT
  TOP 10 *
FROM (
	LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
) AS d;
```

Here is what I've got:

```sql
GageHeight2  Flow   site_no   datetime             Precipitation  GageHeight
-----------  ------ --------  -------------------  -------------  ----------
10.9         15300  09380000  2018-06-28 00:30     671            9.80
10.8         14500  09380000  2018-06-28 01:00     673            9.64
10.7         14100  09380000  2018-06-28 01:15     672            9.56
11.0         16200  09380000  2018-06-27 00:00     669            9.97
10.9         15700  09380000  2018-06-27 00:30     668            9.88
10.8         15400  09380000  2018-06-27 00:45     672            9.82
10.8         15100  09380000  2018-06-27 01:00     672            9.77
10.8         14700  09380000  2018-06-27 01:15     672            9.68
10.9         16000  09380000  2018-06-27 00:15     668            9.93
10.8         14900  09380000  2018-06-28 00:45     672            9.72
```


We have got plenty of numbers, but what do they mean? To answer this question, we will ask Vantage to detect the schema of the CSV files:

```sql
SELECT
  *
FROM (
	LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
	RETURNTYPE='NOSREAD_SCHEMA'
) AS d;
```

Vantage will now fetch a data sample to analyze the schema and return results:

```sql
Name            Datatype                            FileType  Location
--------------- ----------------------------------- --------- -------------------------------------------------------------------
GageHeight2     decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
Flow            decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
site_no         int                                 csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
datetime        TIMESTAMP(0) FORMAT'Y4-MM-DDBHH:MI' csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
Precipitation   decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
GageHeight      decimal(3,2)                        csv       /S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09513780/2018/06/27.csv
```



We see that the CSV files have 6 columns. For each column, we get the name, the datatype and the file coordinates that were used to infer the schema.

## Query data with NOS

Now that we know the schema, we can work with the dataset as if it was a regular SQL table. To prove the point, let's try to do some data aggregation. Let's get an average temperature per site for sites that collect temperatures.

```sql
SELECT
  site_no Site_no, AVG(Flow) Avg_Flow
FROM (
  LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
) AS d
GROUP BY
  site_no
HAVING
  Avg_Flow IS NOT NULL;
```

Result:

```sql
Site_no  Avg_Flow
-------- ---------
09380000 11
09423560 73
09424900 93
09429070 81
```

To register your ad hoc exploratory activity as a permanent source, create it as a foreign table:

```sql
-- If you are running this sample as dbc user you will not have permissions
-- to create a table in dbc database. Instead, create a new database and use
-- the newly create database to create a foreign table.

CREATE DATABASE Riverflow
  AS PERMANENT = 60e6, -- 60MB
  SPOOL = 120e6; -- 120MB

-- change current database to Riverflow
DATABASE Riverflow;

CREATE FOREIGN TABLE riverflow
  USING ( LOCATION('/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/') );

SELECT top 10 * FROM riverflow;
```

Result:

```sql
Location                                                            GageHeight2 Flow site_no datetime            Precipitation GageHeight
------------------------------------------------------------------- ----------- ---- ------- ------------------- ------------- ----------
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09429070/2018/07/02.csv null        null 9429070 2018-07-02 14:40:00 1.21          null
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:30:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:45:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 01:00:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09400815/2018/07/10.csv null        0.00 9400815 2018-07-10 00:15:00 0.00          -0.01
/S3/s3.amazonaws.com/td-usgs-public/CSVDATA/09429070/2018/07/02.csv null        null 9429070 2018-07-02 14:38:00 1.06          null
```


This time, the `SELECT` statement looks like a regular select against an in-database table. If you require subsecond response time when querying the data, there is an easy way to bring the CSV data into Vantage to speed things up. Read on to find out how.

## Load data from NOS into Vantage

Querying object storage takes time. What if you decided that the data looks interesting and you want to do some more analysis with a solution that will you quicker answers? The good news is that data returned with NOS can be used as a source for `CREATE TABLE` statements. Assuming you have `CREATE TABLE` privilege, you will be able to run:

IMPORTANT: This query assumes you created database `Riverflow` and a foreign table called `riverflow` in the previous step.

```sql
-- This query assumes you created database `Riverflow`
-- and a foreign table called `riverflow` in the previous step.

CREATE MULTISET TABLE riverflow_native (site_no, Flow, GageHeight, datetime)
AS (
  SELECT site_no, Flow, GageHeight, datetime FROM riverflow
) WITH DATA
NO PRIMARY INDEX;

SELECT TOP 10 * FROM riverflow_native;
```

Result:

```sql
site_no   Flow  GageHeight  datetime
-------  -----  ----------  -------------------
9400815    .00        -.01  2018-07-10 00:30:00
9400815    .00        -.01  2018-07-10 01:00:00
9400815    .00        -.01  2018-07-10 01:15:00
9400815    .00        -.01  2018-07-10 01:30:00
9400815    .00        -.01  2018-07-10 02:00:00
9400815    .00        -.01  2018-07-10 02:15:00
9400815    .00        -.01  2018-07-10 01:45:00
9400815    .00        -.01  2018-07-10 00:45:00
9400815    .00        -.01  2018-07-10 00:15:00
9400815    .00        -.01  2018-07-10 00:00:00
```

This time, the `SELECT` query returned in less than a second. Vantage didn't have to fetch the data from NOS. Instead, it answered using data that was already on its nodes.

## Access private buckets

So far, we have used a public bucket. What if you have a private bucket? How do you tell Vantage what credentials it should use?

It is possible to inline your credentials directly into your query:

```sql
SELECT
  TOP 10 *
FROM (
  LOCATION='/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/'
  AUTHORIZATION='{"ACCESS_ID":"","ACCESS_KEY":""}'
) AS d;
```

Entering these credentials all the time can be tedious and less secure. In Vantage, you can create an authorization object that will serve as a container for your credentials:

```sql
CREATE AUTHORIZATION aws_authorization
  USER 'YOUR-ACCESS-KEY-ID'
  PASSWORD 'YOUR-SECRET-ACCESS-KEY';
```

You can then reference your authorization object when you create a foreign table:

```sql
CREATE FOREIGN TABLE riverflow
, EXTERNAL SECURITY aws_authorization
USING ( LOCATION('/s3/td-usgs-public.s3.amazonaws.com/CSVDATA/') );
```

## Export data from Vantage to object storage

So far, we have talked about reading and importing data from object storage. Wouldn't it be nice if we had a way to use SQL to export data from Vantage to object storage? This is exactly what `WRITE_NOS` function is for. Let's say we want to export data from `riverflow_native` table to object storage. You can do so with the following query:

```sql
SELECT * FROM WRITE_NOS (
  ON ( SELECT * FROM riverflow_native )
  PARTITION BY site_no ORDER BY site_no
  USING
    LOCATION('YOUR-OBJECT-STORE-URI')
    AUTHORIZATION(aws_authorization)
    STOREDAS('PARQUET')
    COMPRESSION('SNAPPY')
    NAMING('RANGE')
    INCLUDE_ORDERING('TRUE')
) AS d;
```

Here, we instruct Vantage to take data from `riverflow_native` and save it in `YOUR-OBJECT-STORE-URI` bucket using `parquet` format. The data will be split into files by `site_no` attribute. The files will be compressed.

## Summary

In this quick start we have learned how to read data from object storage using Native Object Storage (NOS) functionality in Vantage. NOS supports reading and importing data stored in CSV, JSON and Parquet formats. NOS can also export data from Vantage to object storage.

# Further reading
* [Teradata Vantage™ - Native Object Store Getting Started Guide](https://docs.teradata.com/r/2mw8ooFr~xX0EaaGFaDW8A/root)

<CommunityLink />
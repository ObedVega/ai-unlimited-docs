---
sidebar_position: 3
id: mule-dbc-example
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: August 30, 2023
description: Query Teradata Vantage from a Mule service.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, Mule, JDBC, microservices]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'

# Query Teradata Vantage from a Mule service

## Overview

This example is a clone of the Mulesoft MySQL sample project.
It demonstrates how to query a Teradata database and expose results over REST API.

## Prerequisites

* Mulesoft Anypoint Studio. You can download a 30-day trial from https://www.mulesoft.com/platform/studio.
* Access to a Teradata Vantage instance.

<ClearscapeDocsNote />

## Example service

This example Mule service takes an HTTP request, queries the Teradata Vantage database and returns results in JSON format.

![service flow](../images/flow.png)

The Mule HTTP connector listens for HTTP GET requests with the form: `http://<host>:8081/?lastname=<parameter>`.
The HTTP connector passes the value of `<parameter>` as one of the message properties to a database connector.
The database connector is configured to extract this value and use it in this SQL query:

```sql
SELECT * FROM hr.employees WHERE LastName = :lastName
```

As you can see, we are using parameterized query with reference to the value of the parameter passed to the HTTP connector.
So if the HTTP connector receives http://localhost:8081/?lastname=Smith, the SQL query will be:

```sql
SELECT * FROM employees WHERE last_name = Smith
```

The database connector instructs the database server to run the SQL query, retrieves the result of the query, and passes it to the Transform message processor which converts the result to JSON.
Since the HTTP connector is configured as request-response, the result is returned to the originating HTTP client.

## Setup

* Clone `Teradata/mule-jdbc-example` repository:
```bash
  git clone https://github.com/Teradata/mule-jdbc-example
```

* Edit `src/main/mule/querying-a-teradata-database.xml`, find the Teradata connection string `jdbc:teradata://<HOST>/user=<username>,password=<password>` and replace Teradata connection parameters to match your environment.

:::note
Should your Vantage instance be accessible via ClearScape Analytics Experience, you must replace `<HOST>` with the host URL of your ClearScape Analytics Experience environment. Additionally, the 'user' and 'password' should be updated to reflect your ClearScape Analytics Environment's username and password.
:::

* Create a sample database in your Vantage instance.
Populate it with sample data.

```sql
 -- create database
 CREATE DATABASE HR
   AS PERMANENT = 60e6, SPOOL = 120e6;

 -- create table
 CREATE SET TABLE HR.Employees (
   GlobalID INTEGER,
   FirstName VARCHAR(30),
   LastName VARCHAR(30),
   DateOfBirth DATE FORMAT 'YYYY-MM-DD',
   JoinedDate DATE FORMAT 'YYYY-MM-DD',
   DepartmentCode BYTEINT
 )
 UNIQUE PRIMARY INDEX ( GlobalID );

 -- insert a record
 INSERT INTO HR.Employees (
   GlobalID,
   FirstName,
   LastName,
   DateOfBirth,
   JoinedDate,
   DepartmentCode
 ) VALUES (
   101,
   'Test',
   'Testowsky',
   '1980-01-05',
   '2004-08-01',
   01
 );
```

* Open the project in Anypoint Studio.
    * Once in Anypoint Studio, click on `Import projects..`:

    ![Anypoint import projects menu](../images/anypoint.import.projects.png)

    * Select `Anypoint Studio project from File System`:

    ![Anypoint import option](../images/select.import.option.png)

    * Use the directory where you cloned the git repository as the `Project Root`. Leave all other settings at their default values.

## Run

* Run the example application in Anypoint Studio using the `Run` menu.
The project will now build and run. It will take a minute.
* Go to your web browser and send the following request: http://localhost:8081/?lastname=Testowsky.

You should get the following JSON response:


```json
[
  {
    "JoinedDate": "2004-08-01T00:00:00",
    "DateOfBirth": "1980-01-05T00:00:00",
    "FirstName": "Test",
    "GlobalID": 101,
    "DepartmentCode": 1,
    "LastName": "Testowsky"
  }
]
```

## Further reading

* View this [document](http://www.mulesoft.org/documentation/display/current/Database+Connector) for more information on how to configure a database connector on your machine.
* Access plain [Reference material](http://www.mulesoft.org/documentation/display/current/Database+Connector+Reference) for the Database Connector.
* Learn more about [DataSense](http://www.mulesoft.org/documentation/display/current/DataSense).

<CommunityLink />
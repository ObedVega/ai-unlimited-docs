---
id: ubuntu
title: Ubuntu
sidebar_position: 1
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: January 5th, 2022
description: Use Vantage with ODBC on Ubuntu
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, odbc, ubuntu]
---

import ClearscapeDocsNote from '../../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../../_partials/community_link.mdx'

# Use Vantage with ODBC on Ubuntu

## Overview

This how-to demonstrates how to use the ODBC driver with Teradata Vantage on Ubuntu.

## Prerequisites

* Access to a Teradata Vantage instance.
    <ClearscapeDocsNote/>
* Root access to a Ubuntu machine.

## Installation

* Install dependencies:

```bash
apt update && DEBIAN_FRONTEND=noninteractive apt install -y wget unixodbc unixodbc-dev iodbc python3-pip
```

* Install Teradata ODBC driver for Ubuntu:
```bash
wget https://downloads.teradata.com/download/cdn/connectivity/odbc/17.10.x.x/tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \
    && tar -xzf tdodbc1710__ubuntu_x8664.17.10.00.14-1.tar.gz \
    && dpkg -i tdodbc1710/tdodbc1710-17.10.00.14-1.x86_64.deb
```

* Configure ODBC, by creating file `/etc/odbcinst.ini` with the following content:
```bash
[ODBC Drivers]
Teradata Database ODBC Driver 17.10=Installed

[Teradata Database ODBC Driver 17.10]
Description=Teradata Database ODBC Driver 17.10
Driver=/opt/teradata/client/17.10/odbc_64/lib/tdataodbc_sb64.so
```

## Use ODBC

We will validate the installation with a sample Python application. Create `test.py` file with the following content.
Replace `DBCName=192.168.86.33;UID=dbc;PWD=dbc` with the IP address of your Teradata Vantage instance, username and password:

```python
import pyodbc

print(pyodbc.drivers())

cnxn = pyodbc.connect('DRIVER={Teradata Database ODBC Driver 17.10};DBCName=192.168.86.33;UID=dbc;PWD=dbc;')
cursor = cnxn.cursor()

cursor.execute("SELECT CURRENT_DATE")
for row in cursor.fetchall():
    print(row)
EOF
```

Run the test application:

```python
python3 test.py
```

You should get output similar to:

```python
['ODBC Drivers', 'Teradata Database ODBC Driver 17.10']
(datetime.date(2022, 1, 5), )
```

## Summary

This how-to demonstrated how to use ODBC with Teradata Vantage on Ubuntu. The how-to shows how to install the ODBC Teradata driver and the dependencies. It then shows how to configure ODBC and validate connectivity with a simple Python application.

## Further reading
* [ODBC Driver for Teradata® User Guide](https://docs.teradata.com/search/all?query=ODBC+Driver+for+Teradata+User+Guide&filters=ft%3AisBook~%22true%22&sort=last_update)

<CommunityLink />
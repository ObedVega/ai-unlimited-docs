---
sidebar_position: 7
author: Pablo Escobar de la Oliva
email: pablo.escobardelaoliva@teradata.com
page_last_update: May 29th, 2022
description: Tutorial for deploying and monitoring a Python model into Vantage using ModelOps and Git repository
keywords: [modelops, python, git, clearscape analytics, teradata, data warehouses, teradata, vantage, cloud data platform, machine learning, artificial intelligence, business intelligence, enterprise analytics]
---
import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import ModelOpsBasic from '../_partials/modelops-basic.mdx'

# ModelOps - Import and Deploy your first GIT Model

## Overview

This is a how-to for people who are new to ClearScape Analytics ModelOps. In the tutorial, you will be able to create a new project in ModelOps, upload the required data to Vantage, and track the full lifecycle of a demo model using code templates and following the methodology for GIT models in ModelOps.

## Prerequisites

* Access to a Teradata Vantage instance with ClearScape Analytics (includes ModelOps)

* Ability to run Jupyter notebooks

<ClearscapeDocsNote />

Files needed

Let's start by downloading the needed files for this tutorial. Download these 4 attachments and upload them in your Notebook filesystem. Select the files depending on your version of ModelOps:

ModelOps version 6 (October 2022):

[Download the ModelOps training Notebook](../modelops/attachments/ModelOps_Training_v6.ipynb)

[Download BYOM Notebook file for demo use case](../modelops/attachments/BYOM_v6.ipynb)

[Download data files for demo use case](../modelops/attachments/ModelOps_Data_files_v6.zip)

[Download BYOM code files for demo use case](../modelops/attachments/ModelOps_BYOM_files_v6.zip)

Alternatively you can git clone following repos
``` bash
git clone https://github.com/willfleury/modelops-getting-started
git clone https://github.com/Teradata/modelops-demo-models/
```

ModelOps version 7 (April 2023):

[Download the ModelOps training Notebook](../modelops/attachments/ModelOps_Training_v7.ipynb)

[Download BYOM Notebook file for demo use case](../modelops/attachments/BYOM_v7.ipynb)

[Download data files for demo use case](../modelops/attachments/ModelOps_Data_files_v7.zip)

[Download BYOM code files for demo use case](../modelops/attachments/ModelOps_BYOM_files_v7.zip)

``` bash
git clone -b v7 https://github.com/willfleury/modelops-getting-started.git
git clone https://github.com/Teradata/modelops-demo-models/
```

Setting up the database and Jupyter environment 

Follow the ModelOps_Training Jupyter Notebook to setup the database, tables and libraries needed for the demo.

## Understand where we are in the Methodology

![ModelOps Methodology GIT screenshot](../modelops/images/modelops-git.png)


<ModelOpsBasic />

## Prepare code templates

For Git Models we need to fill the code templates available when adding a new model. 

These code scripts will be stored in the git repository under: model_definitions/your-model/model_modules/

* __init__.py : this an empty file required for python modules

* training.py: this script contains train function

``` python
def train(context: ModelContext, **kwargs):
    aoa_create_context()

    # your training code

    # save your model
    joblib.dump(model, f"{context.artifact_output_path}/model.joblib")

    record_training_stats(...)
```

Review the Operationalize notebook to see how you can execute this from CLI or from notebook as an alternative to ModelOps UI.	

* evaluation.py: this script contains evaluate function

``` python
def evaluate(context: ModelContext, **kwargs):
    aoa_create_context()

    # read your model
    model = joblib.load(f"{context.artifact_input_path}/model.joblib")

    # your evaluation logic

    record_evaluation_stats(...)
```

Review the Operationalize notebook to see how you can execute this from CLI or from notebook as an alternative to ModelOps UI.	

* scoring.py: this script contains score function

``` python
def score(context: ModelContext, **kwargs):
    aoa_create_context()

    # read your model
    model = joblib.load(f"{context.artifact_input_path}/model.joblib")

    # your evaluation logic

    record_scoring_stats(...)
```

Review the Operationalize notebook to see how you can execute this from CLI or from notebook as an alternative to ModelOps UI.	

* requirements.txt: this file contains the library names and versions required for your code scripts. Example:

``` python
%%writefile ../model_modules/requirements.txt
xgboost==0.90
scikit-learn==0.24.2
shap==0.36.0
matplotlib==3.3.1
teradataml==17.0.0.4
nyoka==4.3.0
aoa==6.0.0
```

* config.json: this file located in the parent folder (your-model folder) contains default hyper-parameters

``` python
%%writefile ../config.json
{
   "hyperParameters": {
      "eta": 0.2,
      "max_depth": 6
   }
}
```

Go and review the code scripts for the demo model in the repository: https://github.com/Teradata/modelops-demo-models/

Go into model_definitions->python-diabetes->model_modules

## Model Lifecycle for a new GIT

* Open Project to see models available from GIT

* Train a new model version

* see how CommitID from code repository is tracked

* Evaluate

* Review evaluation report, including dataset statistics and model metrics

* Compare with other model versions

* Approve

* Deploy in Vantage - Engine, Publish, Schedule. Scoring dataset is required
Use your connection and select a database. e.g "aoa_byom_models"

* Deploy in Docker Batch  - Engine, Publish, Schedule. Scoring dataset is required
Use your connection and select a database. e.g "aoa_byom_models"

* Deploy in Restful Batch  - Engine, Publish, Schedule. Scoring dataset is required
Use your connection and select a database. e.g "aoa_byom_models"

* Deployments/executions

* Evaluate again with dataset2 - to monitor model metrics behavior

* Monitor Model Drift - data and metrics

* Open BYOM notebook to execute the PMML predict from SQL code when deployed in Vantage

* Test Restful from ModelOps UI or from curl command

* Retire deployments

## Summary

In this quick start we have learned how to follow a full lifecycle of GIT models into ModelOps and how to deploy it into Vantage or into Docker containers for Edge deployments. Then how we can schedule a batch scoring or test restful or on-demand scorings and start monitoring on Data Drift and Model Quality metrics.

## Further reading
* [ModelOps documentation](https://docs.teradata.com/search/documents?query=ModelOps&sort=last_update&virtual-field=title_only&content-lang=).

import CommunityLinkPartial from '../_partials/community_link.mdx';

<CommunityLinkPartial />
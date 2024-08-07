---
sidebar_position: 8
author: Tayyaba Batool
email: tayyaba.batool@teradata.com
page_last_update: Mar 19th, 2024
description: Tutorial for Model Factory Solution - Executing Airflow workflows with ClearScape Analytics ModelOps
keywords: [modelfactory, modelops, byom, python, clearscape analytics, teradata, data warehouses, teradata, vantage, cloud data platform, machine learning, artificial intelligence, business intelligence, enterprise analytics]
---
import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'

# Execute Airflow workflows with ModelOps - Model Factory Solution Accelerator

## Overview

The purpose of the **Model Factory Solution Accelerator** of **ClearScape Analytics** is to streamline and accelerate the end-to-end process of developing, deploying, and managing machine learning models within an organization at **Horizontal Scale** by operationalizing **hundreds of models for a business domain at one effort**. It leverages the scalability of in-database analytics and the openness of supporting partner model formats such as H2O or Dataiku. This unique combination enhances efficiency, scalability, and consistency across various stages of the machine learning lifecycle in Enterprise environments. 
    
By incorporating best practices, automation, and standardized workflows, the Model Factory Solution Accelerator enables teams to rapidly select the data to be used, configure the model required, ensure reproducibility, and deploy **unlimited** number of models seamlessly into production. Ultimately, it aims to reduce the time-to-value for machine learning initiatives and promote a more structured and efficient approach to building and deploying models at scale. Here is the diagram of an automated Workflow:

![Workflow](../modelops/images/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution/Workflow.png)

Here are the steps to implement Model Factory Solution Accelerator using Airflow and ClearScape Analytics ModelOps. Apache Airflow is used for the scheduling and orchestration of data pipelines or workflows. So in this tutorial we are creating an Airflow DAG (Directed Acyclic Graph) which will be executed to automate the lifecycle of ModelOps.

## Prerequisites

* In this tutorial it is implemented on local machine using **Visual Studio code** IDE. 

In order to execute shell commands, you can install the VS code extension **"Remote Development"** using the followng link. This extension pack includes the WSL extension, in addition to the Remote - SSH, and Dev Containers extensions, enabling you to open any folder in a container, on a remote machine, or in WSL:
[VS code marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).

* Access to a Teradata Vantage instance with ClearScape Analytics (includes ModelOps)



<ClearscapeDocsNote />


## Configuring Visual Studio Code and Installing Airflow on docker-compose

* Open Visual Studio code and select the option of open a remote window. Then select Connect to WSL-Ubuntu

* Select File > Open Folder. Then select the desired folder or create a new one using this command: mkdir [folder_name]

* Set the AIRFLOW_HOME environment variable. Airflow requires a home directory and uses ~/airflow by default, but you can set a different location if you prefer. The AIRFLOW_HOME environment variable is used to inform Airflow of the desired location.

``` bash 
AIRFLOW_HOME=./[folder_name]
```

* Install apache-airflow stable version 2.8.2 from PyPI repository.:

``` bash  
    AIRFLOW_VERSION=2.8.2

    PYTHON_VERSION="$(python3 --version | cut -d " " -f 2 | cut -d "." -f 1-2)"

    CONSTRAINT_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${AIRFLOW_VERSION}/constraints-${PYTHON_VERSION}.txt"

    pip install "apache-airflow==${AIRFLOW_VERSION}" --constraint "${CONSTRAINT_URL}" --default-timeout=100
```

* Install the Airflow Teradata provider stable version from PyPI repository.

``` bash  
pip install "apache-airflow-providers-teradata" --default-timeout=100
```

* Install Docker Desktop so that you can use docker container for running airflow. Ensure that the docker desktop is running.

* Check docker version using this command:

``` bash  
docker --version
```

Check the version of docker compose. Docker Compose is a tool for defining and running multi-container applications

``` bash  
docker-compose --version
```

To deploy Airflow on Docker Compose, you need to fetch docker-compose.yaml using this curl command.

``` bash , id="Fetch docker-compose yaml", role="content-editable emits-gtm-events"
    curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.8.2/docker-compose.yaml'
```

Create these folders to use later using following command: 

``` bash , id="Create Airflow folders", role="content-editable emits-gtm-events"
mkdir -p ./dags ./logs ./plugins ./config
```


## Configuring Model Factory Solution Accelerator

Create a config file inside config folder and set the parameters to corresponding values depending on which model you want to train.

<details>

<summary>Click to reveal the Python code</summary>

<pre>
```python  
from configparser import ConfigParser
import os

config = ConfigParser()

config['MAIN'] = {
    "projectId": "23e1df4b-b630-47a1-ab80-7ad5385fcd8d",
    "bearerToken": os.environ['BEARER_TOKEN'],
    "trainDatasetId": "ba39e766-2fdf-426f-ba5c-4ca3e90955fc",
    "evaluateDatasetId": "74489d62-2af5-4402-b264-715e151a420a",
    "datasetConnectionId" : "151abf05-1914-4d38-a90d-272d850f212c",
    "datasetTemplateId": "d8a35d98-21ce-47d0-b9f2-00d355777de1"
}

config['HYPERPARAMETERS'] = {
    "eta": 0.2,
    "max_depth": 6
}

config['RESOURCES'] = {
    "memory": "500m",
    "cpu": "0.5"
}

config['MODEL'] = {
    "modelId": "f937b5d8-02c6-5150-80c7-1e4ff07fea31",
    "approvalComments": "Approving this model!",
    "cron": "@once",
    "engineType": "DOCKER_BATCH",
    "engine": "python-batch",
    "dockerImage": "artifacts.td.teradata.com/tdproduct-docker-snapshot/avmo/aoa-python-base:3.9.13-1"
}


with open('./config/modelOpsConfig.ini', 'w') as f:
    config.write(f)
```
</pre>
</details>
Now copy the Bearer token from the ModelOps user interface (Left Menu -> Your Account -> Session Details) and set it here as an environment varibale using the following command:

``` bash , id="Bearer token", role="content-editable emits-gtm-events"
export BEARER_TOKEN='your_token_here'
```

Now you can execute the previously created config file, which will create a new ini file inside config folder containing all the required parameters which will be used in the DAG creation step.

``` python , id="Create config ini", role="content-editable emits-gtm-events"
python3 createConfig.py
```

## Create a Airflow DAG containing full ModelOps Lifecycle

Now you can create a DAG using the following python code. Add this python code file inside dags folder. This DAG contains 5 tasks of ModelOps lifecycle (i.e., Train, Evaluate, Approve, Deploy and Retire)


<details>

<summary>Click to reveal the Python code</summary>

<pre>
```python  
import base64
from datetime import datetime, timedelta, date
import json
import os
import time

from airflow import DAG
from airflow.operators.python import PythonOperator

import requests

from configparser import ConfigParser

# Read from Config file
config = ConfigParser()
config.read('config/modelOpsConfig.ini')

config_main = config["MAIN"]
config_hyper_params = config["HYPERPARAMETERS"]
config_resources = config["RESOURCES"]
config_model = config["MODEL"]

# Default args for DAG
default_args = {
    'owner': 'Tayyaba',
    'retries': 5,
    'retry_delay': timedelta(minutes=2)
}

def get_job_status(job_id):

    # Use the fetched Job ID to check Job Status
    headers_for_status = {
    'AOA-PROJECT-ID': config_main['projectid'],
    'Authorization': 'Bearer ' + config_main['bearertoken'],
    }

    status_response = requests.get('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/jobs/' + job_id + '?projection=expandJob', headers=headers_for_status)
    status_json = status_response.json()
    job_status = status_json.get('status')
    return job_status


def train_model(ti):

    headers = {
    'AOA-Project-ID': config_main['projectid'],
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Authorization': 'Bearer ' + config_main['bearertoken'],
    'Content-Type': 'application/json',
    }

    json_data = {
        'datasetId': config_main['trainDatasetId'],
        'datasetConnectionId': config_main['datasetConnectionId'],
        'modelConfigurationOverrides': {
            'hyperParameters': {
                'eta': config_hyper_params['eta'],
                'max_depth': config_hyper_params['max_depth'],
            },
        },
        'automationOverrides': {
            'resources': {
                'memory': config_resources['memory'],
                'cpu': config_resources['cpu'],
            },
            'dockerImage':  config_model['dockerImage'],
        },
    }

    
    response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/models/' + config_model['modelid'] + '/train', headers=headers, json=json_data)
    
    json_data = response.json()

    # Get the Training Job ID
    job_id = json_data.get('id')
    ti.xcom_push(key='train_job_id', value=job_id)

    job_status = get_job_status(job_id)
    print("Started - Training Job - Status: ", job_status)

    while job_status != "COMPLETED":
        if job_status=="ERROR":
            print("The training job is terminated due to an Error")
            ti.xcom_push(key='trained_model_id', value='NONE') # Setting the Trained Model Id to None here and check in next step (Evaluate)
            break
        elif job_status=="CANCELLED":
            ti.xcom_push(key='trained_model_id', value='NONE') 
            print("The training job is Cancelled !!")
            break
        print("Job is not completed yet. Current status", job_status)
        time.sleep(5) #wait 5s
        job_status = get_job_status(job_id)

    # Checking Job status at the end to push the correct trained_model_id
    if(job_status == "COMPLETED"):
        train_model_id = json_data['metadata']['trainedModel']['id']
        ti.xcom_push(key='trained_model_id', value=train_model_id)
        print('Model Trained Successfully! Job ID is : ', job_id, 'Trained Model Id : ', train_model_id, ' Status : ', job_status)
    else:
        ti.xcom_push(key='trained_model_id', value='NONE')
        print("Training Job is terminated !!")


def evaluate_model(ti):

    trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id')

    headers = {
    'AOA-Project-ID': config_main['projectid'],
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Authorization': 'Bearer ' + config_main['bearertoken'],
    'Content-Type': 'application/json',
    }

    json_data = {
        'datasetId': config_main['evaluatedatasetid'],
        'datasetConnectionId': config_main['datasetConnectionId'],
        'modelConfigurationOverrides': {
            'hyperParameters': {
                'eta': config_hyper_params['eta'],
                'max_depth': config_hyper_params['max_depth'],
            },
        },
        'automationOverrides': {
            'resources': {
                'memory': config_resources['memory'],
                'cpu': config_resources['cpu'],
            },
            'dockerImage':  config_model['dockerImage'],
        },
    }

    if trained_model_id == 'NONE':
        ti.xcom_push(key='evaluated_model_status', value='FALIED')
        print("Evaluation cannot be done as the Training Job was terminated !!") 
    else:
        response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/evaluate', headers=headers, json=json_data)
        json_data = response.json()

        # Get the Evaluation Job ID
        eval_job_id = json_data.get('id')
        ti.xcom_push(key='evaluate_job_id', value=eval_job_id)

        job_status = get_job_status(eval_job_id)
        print("Started - Job - Status: ", job_status)

        while job_status != "COMPLETED":
            if job_status=="ERROR":
                print("The evaluation job is terminated due to an Error")
                # Set the Trained Model Id to None here and check in next step (Evaluate)
                break
            elif job_status=="CANCELLED":
                print("The evaluation job is Cancelled !!")
                break
            print("Job is not completed yet. Current status", job_status)
            time.sleep(5) # wait 5s
            job_status = get_job_status(eval_job_id)

        # Checking Job status at the end to push the correct evaluate_job_id
        if(job_status == "COMPLETED"):
            ti.xcom_push(key='evaluated_model_status', value='EVALUATED')
            print('Model Evaluated Successfully! Job ID is : ', eval_job_id, ' Status : ', job_status)
        else:
            ti.xcom_push(key='evaluated_model_status', value='FAILED')
            print("Evaluation Job is terminated !!")


def approve_model(ti):

    evaluated_model_status = ti.xcom_pull(task_ids = 'task_evaluate_model', key = 'evaluated_model_status')

    if evaluated_model_status == 'FAILED':
        ti.xcom_push(key='approve_model_status', value='FALIED')
        print("Approval cannot be done as the Evaluation was failed !!") 
    else:
        trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id') 

        headers = {
        'AOA-Project-ID': config_main['projectid'],
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Authorization': 'Bearer ' + config_main['bearertoken'],
        'Content-Type': 'application/json',
        }

        json_data = {
            "comments": (base64.b64encode(config_model['approvalComments'].encode()).decode())
        }

        response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/approve' , headers=headers, json=json_data)
        response_json = response.json()
        approval_status = response_json['status']
        if(approval_status == 'APPROVED'):
            ti.xcom_push(key='approve_model_status', value='EVALUATED')
            print('Model Approved Successfully! Status: ', approval_status)
        else:
            ti.xcom_push(key='approve_model_status', value='FAILED')
            print('Model not approved! Status: ', approval_status)


def deploy_model(ti):

    approve_model_status = ti.xcom_pull(task_ids = 'task_approve_model', key = 'approve_model_status')
 
    headers = {
        'AOA-Project-ID': config_main['projectid'],
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Authorization': 'Bearer ' + config_main['bearertoken'],
        'Content-Type': 'application/json',
    }


    json_data = {
        'engineType': config_model['engineType'],
        'engineTypeConfig': {
            'dockerImage':  config_model['dockerImage'],
            'engine': "python-batch",
            'resources': {
                'memory': config_resources['memory'],
                'cpu': config_resources['cpu'],
            }
        },
        'language':"python",
        'datasetConnectionId': config_main['datasetConnectionId'],
        'datasetTemplateId': config_main['datasetTemplateId'],
        'cron': config_model['cron'],
        'publishOnly': "false",
        'args':{}
    }

    if approve_model_status == 'FAILED':
        ti.xcom_push(key='deploy_model_status', value='FALIED')
        print("Deployment cannot be done as the model is not approved !!") 
    else:
        trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id') 

        response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/deploy', headers=headers, json=json_data)
        json_data = response.json()

        # Get the Deployment Job ID
        deploy_job_id = json_data.get('id')
        ti.xcom_push(key='deploy_job_id', value=deploy_job_id)

        # deployed_model_id = json_data['metadata']['deployedModel']['id']

        job_status = get_job_status(deploy_job_id)
        print("Started - Deployment Job - Status: ", job_status)

        while job_status != "COMPLETED":
            if job_status=="ERROR":
                ti.xcom_push(key='deploy_model_status', value='FAILED')
                print("The deployment job is terminated due to an Error")
                break
            elif job_status=="CANCELLED":
                ti.xcom_push(key='deploy_model_status', value='FAILED')
                print("The deployment job is Cancelled !!")
                break
            print("Job is not completed yet. Current status", job_status)
            time.sleep(5) # wait 5s
    job_status = get_job_status(deploy_job_id)

    # Checking Job status at the end to push the correct deploy_model_status
    if(job_status == "COMPLETED"):
        ti.xcom_push(key='deploy_model_status', value='DEPLOYED')
        print('Model Deployed Successfully! Job ID is : ', deploy_job_id, ' Status : ', job_status)
    else:
        ti.xcom_push(key='deploy_model_status', value='FAILED')
        print("Deployment Job is terminated !!")



def retire_model(ti):

    deployed_model_status = ti.xcom_pull(task_ids = 'task_deploy_model', key = 'deploy_model_status')

    if deployed_model_status == 'FAILED':
        ti.xcom_push(key='retire_model_status', value='FALIED')
        print("Retirement cannot be done as the model is not deployed !!") 
    else:
        trained_model_id = ti.xcom_pull(task_ids = 'task_train_model', key = 'trained_model_id') 

        headers = {
        'AOA-Project-ID': config_main['projectid'],
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Authorization': 'Bearer ' + config_main['bearertoken'],
        'Content-Type': 'application/json',
        }

        # Identifying the deployment ID
        get_deployment_id_response = requests.get('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/deployments/search/findByStatusAndTrainedModelId?projection=expandDeployment&status=DEPLOYED&trainedModelId=' + trained_model_id , headers=headers)
  
        get_deployment_id_json = get_deployment_id_response.json()
        deployment_id = get_deployment_id_json['_embedded']['deployments'][0]['id']

        json_data = {
            "deploymentId": deployment_id
        }

        # Retire the specific deployment
        retire_model_response = requests.post('https://airflow-u9usja4twtauvt3s.env.clearscape.teradata.com:8443/modelops/core/api/trainedModels/' + trained_model_id + '/retire', headers=headers, json=json_data)
        retire_model_response_json = retire_model_response.json()

                # Get the Evaluation Job ID
        retire_job_id = retire_model_response_json.get('id')
        ti.xcom_push(key='retire_job_id', value=retire_job_id)

        job_status = get_job_status(retire_job_id)
        print("Started - Job - Status: ", job_status)

        while job_status != "COMPLETED":
            if job_status=="ERROR":
                print("The Retire job is terminated due to an Error")
                # Set the Trained Model Id to None here and check in next step (Evaluate)
                break
            elif job_status=="CANCELLED":
                print("The Retire job is Cancelled !!")
                break
            print("Job is not completed yet. Current status", job_status)
            time.sleep(5) # wait 5s
            job_status = get_job_status(retire_job_id)

        # Checking Job status at the end to push the correct evaluate_job_id
        if(job_status == "COMPLETED"):
            ti.xcom_push(key='retire_model_status', value='RETIRED')
            print('Model Retired Successfully! Job ID is : ', retire_job_id, ' Status : ', job_status)
        else:
            ti.xcom_push(key='retire_model_status', value='FAILED')
            print("Retire Job is terminated !!")



with DAG(
    dag_id = 'ModelOps_Accelerator_v1',
    default_args=default_args,
    description = 'ModelOps lifecycle accelerator for Python Diabetes Prediction model',
    start_date=datetime.now(), # Set the start_date as per requirement
    schedule_interval='@daily'
) as dag:
    task1 = PythonOperator(
        task_id='task_train_model',
        python_callable=train_model
    )
    task2 = PythonOperator(
        task_id='task_evaluate_model',
        python_callable=evaluate_model
    )
    task3 = PythonOperator(
        task_id='task_approve_model',
        python_callable=approve_model
    )
    task4 = PythonOperator(
        task_id='task_deploy_model',
        python_callable=deploy_model
    )
    task5 = PythonOperator(
        task_id='task_retire_model',
        python_callable=retire_model
    )
    

task1.set_downstream(task2)
task2.set_downstream(task3)
task3.set_downstream(task4)
task4.set_downstream(task5)
```
</pre>
</details>

## Initialize Airflow in Docker Compose

While initializing Airflow services like the internal Airflow database, for operating systems other than Linux, you may get a warning that AIRFLOW_UID is not set, but you can safely ignore it. by setting its environment variable using the following command.

``` bash , id="UID Airflow variable", role="content-editable emits-gtm-events"
echo -e "AIRFLOW_UID=5000" > .env
```

To run internal database migrations and create the first user account, initialize the database using this command:

``` bash , id="", role="content-editable emits-gtm-events"
docker compose up airflow-init
```

After initialization is complete, you should see a message like this:

``` bash , id="Check Airflow init", role="content-editable emits-gtm-events"
 airflow-init_1       | Upgrades done
 airflow-init_1       | Admin user airflow created
 airflow-init_1       | 2.8.2
 start_airflow-init_1 exited with code 0
```

## Clean up Airflow demo environment

You can clean up the environment which will remove the preloaded example DAGs using this command:

``` bash , id="Docker compose down", role="content-editable emits-gtm-events"
docker-compose down -v
```

Then update this parameter in docker-compose.yaml file as given below:

``` bash , id="Docker compose yaml", role="content-editable emits-gtm-events"
AIRFLOW__CORE__LOAD_EXAMPLES: 'false'
```

## Launch Airflow with Model Factory Solution Accelerator

Launch Airflow using this command:

``` bash , id="Docker compose up", role="content-editable emits-gtm-events"
docker-compose up -d
```


## Run Airflow DAG of Model Factory Solution with ModelOps

* Now you can access Airflow UI uisng the following http://localhost:8080/

![Airflow login](../modelops/images/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution/LoginPage.png)

* Login with Usename: airflow and Password: airflow. In the DAGs menu you will be able to see your created DAGs.

![DAGs](../modelops/images/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution/DAGs.png)

* Select your latest created DAG and the graph will look like this:

![DAGs](../modelops/images/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution/DAG_graph.png)

* Now you can trigger the DAG using the play icon on the top right side.

* You can check the logs by selecting any task and then click on the logs menu:

* On the ClearScape Analytics ModelOps - Jobs section you can see that the jobs have started running:

![DAGs](../modelops/images/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution/modelOps1.png)

* Now you can see that all the tasks are successfully executed.

![DAGs](../modelops/images/execute-airflow-workflows-with-clearscape-analytics-modelops-model-factory-solution/successTasks.png)

## Summary

This tutorial aimed at providing a hands on exercise on how to install an Airflow environment on a Linux server and how to use Airflow to interact with ClearScape Analytics ModelOps and Teradata Vantage database. An additional example is provided on how to integrate Airflow and the data modelling and maintenance tool dbt to create and load a Teradata Vantage database.

## Further reading
* [ModelOps documentatioN](https://docs.teradata.com/search/documents?query=ModelOps&sort=last_update&virtual-field=title_only&content-lang=).

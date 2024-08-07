---
sidebar_position: 15
id: segment
author: Adam Tworkiewicz
email: adam.tworkiewicz@teradata.com
page_last_update: January 18th, 2022
description: Store events from Twilio Segment in Teradata Vantage.
keywords: [data warehouses, compute storage separation, teradata, vantage, cloud data platform, object storage, business intelligence, enterprise analytics, customer data platform, cdp, segment]
---

import ClearscapeDocsNote from '../_partials/vantage_clearscape_analytics.mdx'
import CommunityLink from '../_partials/community_link.mdx'
import tabsDBT from '../_partials/tabsDBT.mdx'

# Store events from Twilio Segment

## Overview
This solution listens to events from Twilio Segment and writes data to a Teradata Vantage instance. The example uses Google Cloud but it can be translated into any cloud platform.

## Architecture

In this solution, Twilio Segment writes raw event data to Google Cloud Pub/Sub. Pub/Sub forwards events to a Cloud Run application. The Cloud Run app writes data to a Teradata Vantage database. It's a serverless solution that doesn't require allocation or management of any VM's.

![Segment Google Cloud Flow Diagram](../images/segment.flow.diagram.png)

## Deployment

### Prerequisites
1. A Google Cloud account. If you don't have an account, you can create one at https://console.cloud.google.com/.
2. `gcloud` installed. See https://cloud.google.com/sdk/docs/install.
3. A Teradata Vantage instance that Google Cloud Run can talk to.

<ClearscapeDocsNote />

### Build and deploy

1. Clone the sample repository:
```
git clone git@github.com:Teradata/segment-integration-tutorial.git
```

2. The repo contains `segment.sql` file that sets up the database. the script on your Vantage db using your favorite SQL IDE, [Teradata Studio](https://downloads.teradata.com/download/tools/teradata-studio) or command line tool called `bteq` (download for [Windows](https://downloads.teradata.com/node/7314), [Linux](https://downloads.teradata.com/node/200442), [macOS](https://downloads.teradata.com/node/201214).
The SQL script will create a new database called `Segment` and a set of tables to store Segment events.

3. Set the default project and region:
```
gcloud config set project <PROJECT_ID>
gcloud config set compute/region <REGION>
```

4. Retrieve the project id and the number. We will need it in subsequent steps:
```
export PROJECT_ID=$(gcloud config get-value project)

export PROJECT_NUMBER=$(gcloud projects list \
  --filter="$(gcloud config get-value project)" \
  --format="value(PROJECT_NUMBER)")
```

5. Enable required Google Cloud services:
```
gcloud services enable cloudbuild.googleapis.com containerregistry.googleapis.com run.googleapis.com secretmanager.googleapis.com pubsub.googleapis.com
```

6. Build the application:
```
gcloud builds submit --tag gcr.io/$PROJECT_ID/segment-listener
```

7. Define an API key that you will share with Segment. Store the API key in Google Cloud Secret Manager:
```
gcloud secrets create VANTAGE_USER_SECRET
echo -n 'dbc' > /tmp/vantage_user.txt
gcloud secrets versions add VANTAGE_USER_SECRET --data-file=/tmp/vantage_user.txt

gcloud secrets create VANTAGE_PASSWORD_SECRET
echo -n 'dbc' > /tmp/vantage_password.txt
gcloud secrets versions add VANTAGE_PASSWORD_SECRET --data-file=/tmp/vantage_password.txt
```

8. The application that write Segment data to Vantage will use Cloud Run. We first need to allow Cloud Run to access secrets:
```
gcloud projects add-iam-policy-binding $PROJECT_ID \
     --member=serviceAccount:$PROJECT_NUMBER-compute@developer.gserviceaccount.com \
     --role=roles/secretmanager.secretAccessor
```

9. Deploy the app to Cloud Run (replace `<VANTAGE_HOST>` with the hostname or IP of your Teradata Vantage database). The second export statement saves the service url as we need it for subsequent commands:
```
gcloud run deploy --image gcr.io/$PROJECT_ID/segment-listener segment-listener \
  --region $(gcloud config get-value compute/region) \
  --update-env-vars VANTAGE_HOST=35.239.251.1 \
  --update-secrets 'VANTAGE_USER=VANTAGE_USER_SECRET:1, VANTAGE_PASSWORD=VANTAGE_PASSWORD_SECRET:1' \
  --no-allow-unauthenticated

export SERVICE_URL=$(gcloud run services describe segment-listener --platform managed --region $(gcloud config get-value compute/region) --format 'value(status.url)')
```

10. Create a Pub/Sub topic that will receive events from Segment:
```
gcloud pubsub topics create segment-events
```

11. Create a service account that will be used by Pub/Sub to invoke the Cloud Run app:
```
gcloud iam service-accounts create cloud-run-pubsub-invoker \
     --display-name "Cloud Run Pub/Sub Invoker"
```

12. Give the service account permission to invoke Cloud Run:
```
gcloud run services add-iam-policy-binding segment-listener \
  --region $(gcloud config get-value compute/region) \
  --member=serviceAccount:cloud-run-pubsub-invoker@$PROJECT_ID.iam.gserviceaccount.com \
  --role=roles/run.invoker
```

13. Allow Pub/Sub to create authentication tokens in your project:
```
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member=serviceAccount:service-$PROJECT_NUMBER@gcp-sa-pubsub.iam.gserviceaccount.com \
  --role=roles/iam.serviceAccountTokenCreator
```

14. Create a Pub/Sub subscription with the service account:
```
gcloud pubsub subscriptions create segment-events-cloudrun-subscription --topic projects/$PROJECT_ID/topics/segment-events \
   --push-endpoint=$SERVICE_URL \
   --push-auth-service-account=cloud-run-pubsub-invoker@$PROJECT_ID.iam.gserviceaccount.com \
   --max-retry-delay 600 \
   --min-retry-delay 30
```

15. Allow Segment to publish to your topic. To do that, assign `pubsub@segment-integrations.iam.gserviceaccount.com` role `Pub/Sub Publisher` in your project at https://console.cloud.google.com/cloudpubsub/topic/list. See [Segment manual](https://segment.com/docs/connections/destinations/catalog/google-cloud-pubsub/#authentication) for details.

16. Configure your Google Cloud Pub/Sub a destination in Segment. Use the full topic `projects/<PROJECT_ID>/topics/segment-events` and map all Segment event types (using `*` character) to the topic.

## Try it out

1. Use Segment's Event Tester functionality to send a sample payload to the topic. Verify that the sample data has been stored in Vantage.

## Limitations

* The example shows how to deploy the app in a single region. In many cases, this setup doesn't guarantee enough uptime. The Cloud Run app should be deployed in more than one region behind a Global Load Balancer.

## Summary

This how-to demonstrates how to send Segment events to Teradata Vantage. The configuration forwards events from Segment to Google Cloud Pub/Sub and then on to a Cloud Run application. The application writes data to Teradata Vantage.

## Further reading
* [Segment Pub/Sub destination documentation](https://segment.com/docs/connections/destinations/catalog/google-cloud-pubsub/)

<CommunityLink />
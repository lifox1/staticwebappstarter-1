# Document Processing Accelerator

## Overview [This Section to be moved to References Section at End]

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site and automate the deployment of a functional, and customizable, POC UI for document processing. This guide will present a high-level overview of the deployment architecture, with a step-by-step instructional guide for immediate deployment, without any coding.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/web_app_ui2.png)

## Architectural Overview
(James to udpate) Once you've created a high-level Resource group, you'll create a high-level Azure DevOps pipeline and import/clone this repo, automatically importing helper libraries and taking advantage of Azure functions to deploy the set of Azure Cognitive Services and manage all of the new Azure module credentials, in the background, within your newly created pipeline. Once the pipeline is deployed, a static webapp will be created with your newly customizable POC UI for document processing!

![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/sample_architecture2.png)

## Currently Inluded Algorithms
 The initial release includes two top NLP use cases, text classification, and custom named entity recognition. Additional tasks and models are on the roadmap for inclusion (see Roadmap section later in this document).
#### Text Classification
Text classification is a supervised learning method of learning and predicting the category or the class of a document given its text content. The state-of-the-art methods are based on neural networks of different architectures as well as pre-trained language models or word embeddings.
#### Custom Named Entity Recognition
Named Entity Recognition (NER) is the task of detecting and classifying real-world objects mentioned in text. Common named entities include person names, locations, organizations, etc. The state-of-the art NER methods include combining Long Short-Term Memory neural network with Conditional Random Field (LSTM-CRF) and pretrained language models like BERT.

NER usually involves assigning an entity label to each word in a sentence, such as the entities shown below:

O: Not an entity (i.e. All other words)
I-LOC: Location  
I-ORG: Organization  
I-PER: Person  

There are a few standard labeling schemes and you can find the details [here](http://cs229.stanford.edu/proj2005/KrishnanGanapathy-NamedEntityRecognition.pdf). The data can also be labeled with custom entities as required by the use case.
## Target Audience
For this repository our target audience includes data scientists and machine learning engineers with varying levels of NLP knowledge as our content is source-only and targets custom machine learning modelling. The utilities and examples provided are intended to be solution accelerators for real-world NLP problems.

## Prerequisities
1. Github account
2. Ensure your subscription has Microsoft.DocumentDB enabled 

![image](https://user-images.githubusercontent.com/11619148/158391730-1badf943-e8fc-4e93-9684-4f9d63040be2.png)
3. Ensure that you have accepted terms and conditions for Responsible AI
 "You must create your first Face, Language service, or Computer Vision resources from the Azure portal to review and acknowledge the terms and conditions. You can do so here: Face, Language service, Computer Vision. After that, you can create subsequent resources using any deployment tool (SDK, CLI, or ARM template, etc) under the same Azure subscription."

## Installation Steps
### 1. Clone repo to your github https://github.com/jameshoff-msft/bpa-backend
**Note**: *a Microsoft-linked account is not required*
### 2. Create a Resource Group in your Azure Portal

### 3. Setting up Azure DevOps Pipeline
**Note**: *You'll use Azure DevOps for running the multi-stage pipeline with build. If you don't already have an Azure DevOps organization, create one by following the instructions at [Quickstart: Create an organization or project collection.](If you don't already have an Azure DevOps organization, create one by following the instructions at Quickstart: Create an organization or project collection.)

####     1. Navigate to Azure DevOps www.dev.azure.com
####     2. Select Repos
####     3. Select Import a Repository https://github.com/jameshoff-msft/bpa-backend
 Cloning may take several minutes. Your cloned repository should mirror the below directory:
 
 ![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/cloned_repository.png)
 
####    4. Project settings (bottom left)

 ![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/project_settings.png)
 
####     5. Create Service Connection
1. Click Service Connections in left navigation pane
2. Select Create service connection - This authorize Azure DevOps to access your Azure resources on your behalf
3. Select Azure Resource Manager
4. Select your subscription
5. Input the same Resource group and Service connection name 
6. Select the checkbox for "Grant access permission to all pipelines
       * note alphanumeric lower case only as multiple azure services and resources are being used with different naming convention restrictions
####     6. Define Pipeline
1. Navigate back to Pipelines in your left Navigation Pane
2. Select Create Pipeline
3. Select Azure Repos Git
4. Select your previously cloned repo
####     7. Review your Pipeline YAML - update lines 12-17
1. Azure subscription = service connection previously created
2. Project name has to be unique (this name is used across most of the services created during this accelerator)
3. Fill in resource group
4. Select your desired location
5. Select your previously cloned repo's URI.
6. Find your repository token
  i. On your github repo page, click your profile
  ii. Select settings
  iii. Select Developer settings at bottom of left navigation pane
  iv. Select Personal access tokens
  v. Select Generate personal access token
  vi. Under Select scopes, select the checkbox for workflow
  vii. Add your own description
  viii. Select Generate token
  ix. Copy your newly generated token *Note be sure to save this token for completing pipeline setup, else this token will need to be regenerated
  v. Paste your newly generated token in the repositoryToken filed
  vi. Under Select scopes, select the checkbox for workflow               

## 4. Select save and run. insert any commit message
You should see the pipeline stages workflow updating. Pipeline deployment will generally take several minutes. Monitor the status of your runs: 

 ![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/model_pipeline_run_part1.png)
 
 You can monitor the detailed log by clicking here <insert screenshot here>
 
 ![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/model_pipeline_run_part1_detailed_log.png)
 
 ## 5. Retrieve front end
1. Navigate to your Resource Group within your Azure Portal <insert static web app screenshot here>
2. Select your static webapp
3. Within the default Overview pane, Select your URL to navigate to the WebApp, this take you to the newly launched WebApp!
 
 ![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/find_static_web_app.png)
 
 ## 6. Load Documents!
1. Use the Select PDF File to load your documents  *Note: your documents should be in pdf/image format. The first document loaded may take several minutes. However, all subsequent documents should be processed much faster
 
 ![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/web_app_blank.png)
 
 ![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/web_app_file_upload_successful.png)

2. Check for you newly found custom entities!
 
  ![](https://github.com/brandoncwn/staticwebappstarter/blob/main/images/web_app_ui2.png)

## Contacts
 Please reach out to the AI Rangers for more info or feedback aka.ms/AIRangers

## Roadmap
| Priority | Item |
| ------- | ------------- |
| Impending | Add standard NER capability from Language Service [What is Named Entity Recognition (NER) in Azure Cognitive Service for Language](https://docs.microsoft.com/en-us/azure/cognitive-services/language-service/named-entity-recognition/overview#:~:text=Named%20Entity%20Recognition%20(NER)%20is,categorize%20entities%20in%20unstructured%20text.)  |
| TBD | Add text summarization |
| TBD | ... |
 

## References
| Subject | Source (Link) |
| ------- | ------------- |
| Custom NER |  https://github.com/microsoft/nlp-recipes/tree/master/examples/named_entity_recognition |
| Text Classification | https://github.com/microsoft/nlp-recipes/tree/master/examples/text_classification |

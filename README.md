# Cloud Native Deployment of a Spring-boot Application

## 1. Google Cloud Platform

### Step 1.
#### Set up a self-paced environment
If you don't already have a Google Account (Gmail or Google Apps), you must create one. Sign-in to Google Cloud Platform console (console.cloud.google.com) and create a new project.

#### Step 2. Google Cloud Shell
To activate Google Cloud Shell, from the developer console simply click the button on the top right-hand side (it should only take a few moments to provision and connect to the environment)

Once connected to the cloud shell, you should see that you are already authenticated and that the project is already set to your PROJECT_ID :

    `$ gcloud auth list`
 
    `Credentialed accounts:`
  
    `- <myaccount>@<mydomain>.com (active)`
    
  
  `$ gcloud config list project`
  
  ` [core]`
  
  ` project = <PROJECT_ID>`
  
#### Step 3. Get the Spring Boot Example source code

    `$ git clone git@github.com:somyagarg94/gcp-demo.git`
    `$ cd gcp-demo`
    
#### Step 4. Run the Application locally

     `$ ./mvnw spring-boot:run`
 
Once the application started, click on the Web Preview icon in the Cloud Shell toolbar and choose preview on port 8099.

#### Step 5. Deploying the Application into App Engine

   First, initialize the Project to be able to run App Engine applications. We'll initialize the project to run in the US Central region:
    
        `$ gcloud app create --region us-central`
  
   Then, deploy your application into App Engine environment, run `mvn appengine:deploy`:
   
        `$ ./mvnw -DskipTests appengine:deploy` 
After the application is deployed, you can visit it by opening the URL http://<project-id>.appspot.com in your web browser
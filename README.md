
# TC-CLI-App

A cli app for translating text from English to Swahili using Google Cloud Translation API.
## Prerequisite
Node.js




## Cloning Repository
```bash
  git clone https://github.com/Newtonkamau14/tc-cli-app.git
```

## Installation

Install packages

```bash
  cd tc-cli-app
  npm install
```
## Create an env file

```bash
  touch .env
```
## Google Cloud 
Create a project.Go to API and Services to enable the Google Cloud Transaltion API.Navigate to Credentials and create an API key for it.


    
## Run Locally
Copy the API key to the .env file as ```API_KEY='' ```.

## Running on the command line
```bash
  node .
```
## Running it anywhere
Installation
```bash
  npm install -g .
```
```bash
  tc-cli-app
```
Uninstalling
```bash
  npm uninstall -g tc-cli-app
```
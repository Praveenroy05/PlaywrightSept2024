# QA Test for UI and API

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Clone the Repository](#clone-the-repository)
- [Run Playwright Tests](#run-playwright-tests)

## Introduction

This is a test project

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Playwright](https://playwright.dev/docs/intro)

## Clone the Repository

Clone the repository to your local machine using the following command:

```sh
git clone <your-github-repo-url>
cd <repository-name>
```

## Run Playwright Tests

```sh
npm install
```
## To Run normal playwright script for registration and Login Run the below command

```sh
npx playwright test tests/fileName.spec.js
OR
npm run registerAndLogin
```
## To Run the framework test cases run the following command

```sh
npx playwright regression OR refer the below script 

 "scripts": {
    "regression": "npx playwright test --grep @E2E --headed",
    "registerAndLogin": "npx playwright test tests/RegisterAndLogin --headed",
    "APITests": "npx playwright test --grep @API"
  },

  use: npm run <scripts-key>

  ```

## Playwright report

To get the automation report please use
```sh
  npx playwright show-report
  ```

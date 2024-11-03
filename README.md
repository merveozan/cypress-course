
# Cypress Course Project

This project is set up for end-to-end testing using Cypress with enhanced reporting features.

## Features

- **Multiple Reporters**: Utilizes `cypress-multi-reporters` to enable both Mochawesome and JUnit reporting.
  - **Mochawesome Reporter**: Generates comprehensive HTML and JSON reports.
  - **Mocha JUnit Reporter**: Produces JUnit-style XML reports.
- **End-to-End Testing**:
  - **Base URL**: Configured to run tests against `http://localhost:3000`.
- **Screenshots and Videos**:
  - Captures screenshots on test failures.
  - Records videos of all test runs, including successful ones.
  - Video compression is set to optimize file size.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Application**
   ```bash
   npm run dev
   ```

3. **Install Cypress**
   ```bash
   npm install cypress --save-dev
   ```

4. **Install Reporters**
   ```bash
   npm install --save-dev cypress-multi-reporters cypress-mochawesome-reporter mocha-junit-reporter
   ```

5. **Open & Configure Cypress**
   ```bash
   npx cypress open
   ```

6. **Run Tests**
   ```bash
   npx cypress run --spec "cypress/e2e/*.cy.js"
   ```

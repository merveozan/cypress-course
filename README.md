Cypress Course Project

This project is set up for end-to-end testing using Cypress with enhanced reporting features.

Features

	•	Multiple Reporters: Utilizes cypress-multi-reporters to enable both Mochawesome and JUnit reporting.
	•	Mochawesome Reporter: Generates comprehensive HTML and JSON reports.
	•	Mocha JUnit Reporter: Produces JUnit-style XML reports suitable for CI integration.
	•	End-to-End Testing:
	•	Base URL: Configured to run tests against http://localhost:3000.
	•	Screenshots and Videos:
	•	Captures screenshots on test failures.
	•	Records videos of all test runs, including successful ones.
	•	Video compression is set to optimize file size.

Setup Instructions

1. Install Dependencies
     ```bash
      npm install
      ```
2. Running Tests
   	•	End-to-End Tests:
     ```bash
      npx cypress open
      ```
3. Running Tests with Video Recording
   ```bash
   npx cypress run --spec "cypress/e2e/*.cy.js"
   ```

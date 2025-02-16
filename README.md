# Tech-Quiz-Test-Suite
  ## License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  https://opensource.org/licenses/MIT  
    This project is licensed under the MIT license. 
    Click the badge for more information.  
  ## Description  
  Tech Quiz Test Suite is a testing suite designed for the Tech Quiz application, ensuring its functionality, reliability, and user experience through rigorous testing. Utilizing both      End-to-End (E2E) and Component testing methodologies with Cypress, this suite verifies every aspect of the quiz lifecycle—from initiating the quiz, answering questions, to viewing        final scores.


  ## Table of Contents  
  - [Description](#description)  
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [License](#license)  
  - [Contribution](#contribution)  
  - [Tests](#tests)  
  - [Questions](#questions)  
  ## Installation  
  To set up and run the Tech Quiz application along with its E2E test suite in development mode, follow these steps:

  Clone the Repository:

  git clone https://github.com/TivonaDe/Tech-Quiz-Test-Suite.git
  
  Navigate to the Project Directory:

  cd Tech-Quiz-Test-Suite

  Install Dependencies:

  npm install
  
  Set Up Environment Variables:

  Create a .env file in the server directory.
  Use the .env.example file as a template, filling in the necessary values.
  cp server/.env.example server/.env
  Build the Application:

  npm run build

  Seed the Database:

  npm run seed
  
  Launch the Application:

  npm run start:dev

  Open Cypress Test Runner:

  npm run cypress

  This will launch the Cypress Test Runner interface where you can run the tests interactively.

  ## Usage  
  Below are steps for using the Tech Quiz and running its tests:

  Access the Application

  Open http://localhost:3000 (or your chosen port) to use the Tech Quiz.
  Running Tests

  Interactive Mode:
  npm run cypress:open
  In the Cypress Test Runner, select E2E (e.g., quiz.cy.js) or Component tests (e.g., Quiz.cy.jsx).
  Headless Mode:
  npm run test
  Executes all tests (E2E and Component) in headless mode.
  Review Test Results

  Cypress offers logs, screenshots, and videos (if enabled) for debugging and analysis.
    
  ## Contribution  
  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  ## Tests  
  This application includes an automated test suite using Cypress for comprehensive coverage. Both End-to-End (E2E) and Component tests are provided.

  Test Types
  E2E Tests (cypress/e2e/quiz.cy.js)
  Validates full user flows, including starting quizzes, answering questions, and viewing final results.

  Component Tests (cypress/component/Quiz.cy.jsx)
  Focus on individual React components (e.g., <Quiz />), ensuring proper rendering, state management, and interactions.

  Scripts
  npm run cypress
  Opens the Cypress Test Runner for interactive E2E and Component tests.

  npm run cypress:open
  Runs the development server and opens the Cypress Test Runner simultaneously.

  npm run test
  Executes all Cypress tests in headless mode.

  Note: The server must be running to perform tests.
  ## Questions  
  If you have any questions about this project, feel free to reach out:

GitHub: TivonaDe
Email: devonacanada@gmail.com

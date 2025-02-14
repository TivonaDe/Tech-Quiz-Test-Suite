describe('Tech Quiz Game Cycle', () => {
    context('Quiz Setup', () => {
        beforeEach(() => {
            // Stub the API request for fetching random questions
            cy.intercept('GET', '/api/questions/random', { 
                statusCode: 200,
                fixture: 'questions.json' 
            }).as('getQuestions');

            // Visit the page
            cy.visit('/');
        });

        it('should load the quiz page and display the Start Quiz button', () => {
            cy.contains('button', 'Start Quiz').should('exist').and('be.visible');
        });

        it('should not display any questions or the end game screen on initial load', () => {
            cy.get('.card').should('not.exist');
            cy.contains('Your Score:').should('not.exist');
            cy.contains('What is 1 + 1?').should('not.exist');
        });
    });

    context('Quiz Play', () => {
        beforeEach(() => {
            // Stub the API request for fetching random questions
            cy.intercept('GET', '/api/questions/random', { 
                statusCode: 200,
                fixture: 'questions.json' 
            }).as('getQuestions');

            // Visit the page
            cy.visit('/');
            
            // Start the quiz
            cy.contains('button', 'Start Quiz').click();

            // Wait for the API call to complete
            cy.wait('@getQuestions');
        });

        it('should display the first question and all answer options', () => {
            // Verify that the question is displayed
            cy.get('.card h2').should('contain', 'What is 1 + 1?');

            // Verify that there are four answer buttons
            cy.get('.card .btn').should('have.length', 4);

            // Verify that there are four answer divs
            cy.get('.card div .alert').should('have.length', 4);

            // Verify that each answer option is displayed correctly
            cy.get('.card .alert').eq(0).should('contain', '6');
            cy.get('.card .alert').eq(1).should('contain', '2');
            cy.get('.card .alert').eq(2).should('contain', '9');
            cy.get('.card .alert').eq(3).should('contain', '12');
        });

        it('should navigate to the next question when an answer is selected', () => {
            // Select the correct answer "2"
            cy.get('button').eq(1).click();

            // Verify that the next question is displayed
            cy.get('.card h2').should('contain', 'What color is the sky?');
        });

        it('should not increment the score when an incorrect answer is selected', () => {
            // Select an incorrect answer for the first question
            cy.get('button').eq(0).click();

            // Verify navigation to the next question
            cy.get('.card h2').should('contain', 'What color is the sky?');

            // Answer remaining questions correctly
            cy.get('button').eq(2).click();
            cy.get('button').eq(2).click();

            // Verify the final score is 2/3
            cy.contains('.alert', '2/3').should('be.visible');
        });

        it('should display the Quiz Completed screen with the correct score', () => {
            // Answer all questions correctly
            cy.get('button').eq(1).click();
            cy.get('button').eq(2).click();
            cy.get('button').eq(2).click();

            // Very the completion screen is visible
            cy.contains('h2', 'Quiz Completed').should('be.visible');
            cy.contains('.alert', 'Your score: 3/3').should('be.visible');
            cy.contains('button', 'Take New Quiz').should('be.visible');
        });

        it('should restart the quiz when "Take New Quiz" button is clicked', () => {
            // Complete the quiz
            cy.get('button').eq(1).click();
            cy.get('button').eq(2).click();
            cy.get('button').eq(2).click();

            // Click "Take New Quiz" button
            cy.contains('button', 'Take New Quiz').click();

            // Verify that the quiz has reset
            cy.get('.card h2').should('contain', 'What is 1 + 1?');
            cy.contains('button', 'Start Quiz').should('not.exist');
            cy.contains('Your Score:').should('not.exist');
        });
    }); 
});
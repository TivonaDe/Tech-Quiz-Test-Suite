import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
    beforeEach(() => {
        // Mount the Quiz component before each test
        cy.mount(<Quiz />);
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    });

    it('should render with the Start Quiz button', () => {
        cy.contains('button', 'Start Quiz').should('exist');
    });

    it('should not display quiz questions on initial render', () => {
        cy.get('card').should('not.exist');
    });

    it('should not show the quiz completion screen initially', () => {
        cy.contains('h2', 'Quiz Completed').should('not.exist');
        cy.contains('Your Score:').should('not.exist');
        cy.contains('button', 'Take New Quiz').should('not.exist');
    });

    it('should start the quiz when Start Quiz button is clicked', () => {
        cy.get('button').contains('Start Quiz').click();

        cy.wait('@getQuestions');
        cy.get('.card').should('be.visible');
        cy.get('.card h2').should('exist').and('not.be.empty');
    });

    it('should display the first quiz question and answers after starting the quiz', () => {
        cy.get('button').contains('Start Quiz').click();

        cy.wait('@getQuestions');

        cy.get('.card h2').should('contain', 'What is 1 + 1?');

        cy.get('.card .btn').should('have.length', 4);
    });

    it('should navigate to the next question when an answer is selected', () => {
        cy.get('button').contains('Start Quiz').click();

        cy.wait('@getQuestions');

        cy.contains('button', 2).click();

        cy.get('.card h2').should('contain', 'What color is the sky?');
    });

    it('should display the Quiz Completed screen on quiz completion', () =>  {
        cy.get('button').contains('Start Quiz').click();

        cy.wait('@getQuestions');

        cy.contains('button', 2).click();
        cy.contains('button', 3).click();
        cy.contains('button', 3).click();

        cy.get('.card h2').should('contain', 'Quiz Completed');
        cy.get('.alert').should('contain', 'Your score:');
        cy.get('button').should('contain', 'Take New Quiz');
    });

    it('should increment score correctly', () => {
        cy.get('button').contains('Start Quiz').click();

        cy.wait('@getQuestions');

        cy.contains('button', 2).click();
        cy.contains('button', 3).click();
        cy.contains('button', 4).click();

        cy.get('.alert').should('contain', '2/3');
    });

    it('should restart the game when the Take New Quiz button is clicked', () => {
        cy.get('button').contains('Start Quiz').click();

        cy.wait('@getQuestions');

        cy.contains('button', 2).click();
        cy.contains('button', 3).click();
        cy.contains('button', 4).click();

        cy.get('button').click();

        cy.get('.card h2').should('contain', 'What is 1 + 1?');
    });
});
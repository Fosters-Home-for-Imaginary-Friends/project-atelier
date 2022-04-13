describe('Questions and Answers', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .wait(2000);
  });

  it ('Finds Questions and Answers Widget', () => {
    cy.contains('QUESTIONS AND ANSWERS');
    cy.get('.qna-container')
  })

  it ('Finds AddQuestionModal', () => {
    cy.get('.questions-container')
      .find('.add-question').click()
      .get('.add-question-container')
      .find('.question-modal')
      .should('exist');
  })

  it ('Clicking AddAnswer should open modal', () => {
    cy.get('.question-head')
      .get('.helpful')
      .eq(2)
      .click()
      .get('.question-modal')
      .should('exist');
  })

  it ('Typing in searchbar should update list', () => {
    cy.get('.search-bar')
      .type('lkjferandom')
      .get('.questions-list')
      .get('.question-head')
      .should('not.exist')
  })
});
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

  // context('Opens a Comparison Modal on Action Button Click', () => {
  //   beforeEach(() => {
  //     cy.get('#related-list')
  //     .find('.product-card:first-of-type')
  //     .find('.compare-button')
  //     .click();
  //   });

  //   it('Finds a Comparison Modal', () => {
  //     cy.get('.compare-modal-container');
  //   });
  // });

  // context('Outfit List', () => {
  //   it('Finds a Product Card in Your Outfit List', () => {
  //     cy.get('#outfit-list')
  //       .find('#add-card')
  //       .click()
  //       .get('#outfit-list')
  //       .find('.product-card')
  //       .not('#add-card');
  //   });

  //   it('Should find a remove-button and click it', () => {
  //     cy.get('#outfit-list')
  //       .find('#add-card')
  //       .click();


  //     cy.get('#outfit-list')
  //       .find('.product-card')
  //       .not('#add-card')
  //       .find('.remove-button')
  //       .click()
  //       .get('#outfit-list')
  //       .find('.product-card')
  //       .not('#add-card')
  //       .should('not.exist');
  //   });
  // });
});
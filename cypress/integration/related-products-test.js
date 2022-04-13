describe('Product Cards', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .wait(1000);
  });

  it('Finds Product Cards', () => {
    cy.get('.product-card');
  });

  context('Opens a Comparison Modal on Action Button Click', () => {
    beforeEach(() => {
      cy.get('#related-list')
      .find('.product-card:first-of-type')
      .find('.compare-button')
      .click();
    });

    it('Finds a Comparison Modal', () => {
      cy.get('.compare-modal-container');
    });
  });

  context('Outfit List', () => {
    it('Finds a Product Card in Your Outfit List', () => {
      cy.get('#outfit-list')
        .find('#add-card')
        .click()
        .get('#outfit-list')
        .find('.product-card')
        .not('#add-card');
    });

    it('Should find a remove-button and click it', () => {
      cy.get('#outfit-list')
        .find('#add-card')
        .click();

      // cy.intercept('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/**').as('getReviews');

      cy.get('#outfit-list')
        .find('.product-card')
        .not('#add-card')
        .find('.remove-button')
        .click()
        .get('#outfit-list')
        .find('.product-card')
        .not('#add-card')
        .should('not.exist');
    });
  });
});
describe('Product Cards', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
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
  context('Adds a Product Card to Your Outfit List', () => {
    beforeEach(() => {

    });
  });
});
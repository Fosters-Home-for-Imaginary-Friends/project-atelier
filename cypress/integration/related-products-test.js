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
      cy.get('#add-card')
      .click();
    });
    it('Finds a Product Card in Your Outfit List', () => {
      cy.get('#outfit-list')
        .find('.product-card');
    });
    it('Reloads the page and finds a product card in your outfit list', () => {
      cy.reload()
        .get('#outfit-list')
        .find('.product-card');
    });
  });
});
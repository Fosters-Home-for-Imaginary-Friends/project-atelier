describe('Product Cards', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Finds Product Cards', () => {
    cy.get('.product-card');
  });
});
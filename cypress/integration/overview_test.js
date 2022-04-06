describe('My First Test', () => {
  it('Visits Atelier website', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Camo Onesie')
  })
})
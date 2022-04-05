describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Contains Reviews', () => {
  it('finds the content "reviews"', () => {
    cy.visit('http://localhost:3000')

    cy.contains('reviews')
  })
})
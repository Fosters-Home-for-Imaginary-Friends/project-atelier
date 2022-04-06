describe('My First Test', () => {
  it('Visits localhost', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Questions and Answers')
  })
})
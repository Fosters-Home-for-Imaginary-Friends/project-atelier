describe('Overview Test Suite', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .wait(1000)
  })

  it('Contains a button that is clickable', () => {
    cy.visit('http://localhost:3000')

    cy.get('.info-button.add').click()
  })
})

/* eslint-disable no-undef */
describe('Overview Test Suite', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .wait(1000)
  })

  it('Contains a button that is clickable', () => {
    cy.get('.info-button.add').click()
  })
})

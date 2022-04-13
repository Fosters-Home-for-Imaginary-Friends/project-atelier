// import { describe, it, cy } from "cypress";

describe('Overview Test Suite', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:3000')
  // })

  // it('Visits Atelier website', () => {
  //   cy.visit('http://localhost:3000')
  // })

  it('Contains a button that is clickable', () => {
    cy.visit('http://localhost:3000')

    cy.get('.info-button.add').click()
  })

  // it('Renders the sale price if current style has a sale price', () => {
  //   cy.visit('http://localhost:3000')


  // })
})

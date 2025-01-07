// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')

    // cy.wait(2000)

    cy.visit('/about')
    cy.get('h1').should('contain', /Santiago/)
  })
})

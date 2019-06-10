/// <reference types="Cypress" />

context('Actions', () => {
  describe('My First Test', function() {
    it('Does not do much!', function() {
      cy.visit('http://localhost:3000/')
      cy.get('input').type('Goku')
      cy.contains('Ingresar').click()
      cy.url().should('include', '/factories')
    })
  })
})

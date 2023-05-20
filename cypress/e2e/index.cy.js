/// <reference types="Cypress" />

describe('Travel Agency', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Buy flight ticket', () => {
        cy.flightChoice()
        cy.apiTests()
        cy.completeForm()
    })
})
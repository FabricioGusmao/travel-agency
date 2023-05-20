
Cypress.Commands.add('completeForm', (
    firstName = Cypress.env('firstName'),
    address = Cypress.env('address'),
    city = Cypress.env('city'),
    state = Cypress.env('state'),
    zipcode = Cypress.env('zipcode'),
    cardtype = Cypress.env('cardtype'),
    creditCardNumber = Cypress.env('creditCardNumber'),
    creditCardMonth = Cypress.env('creditCardMonth'),
    creditCardYear = Cypress.env('creditCardYear'),
    nameOnCard = Cypress.env('nameOnCard'),

) => {
    const completeForm = () => {
        cy.visit('https://www.blazedemo.com/purchase.php')

        // cy.get('#inputName').type(firstName) 
        cy.get(':nth-child(3) > .control-label').should('have.text', 'Address')
        // cy.get('#address').type(address)
        cy.get(':nth-child(4) > .control-label').should('have.text', 'City')
        // cy.get('#city').type(city)
        cy.get(':nth-child(5) > .control-label').should('have.text', 'State')
        // cy.get('#state').type(state)
        cy.get(':nth-child(6) > .control-label').should('have.text', 'Zip Code')
        // cy.get(':nth-child(6) > .control-label').type(zipcode)
        cy.get('#cardType').select(cardtype).should('have.value', 'amex')
        cy.get(':nth-child(8) > .control-label').should('have.text', 'Credit Card Number')
        cy.get('#creditCardNumber')
            .type(creditCardNumber)
        cy.get(':nth-child(9) > .control-label').should('have.text', 'Month')
        cy.get('#creditCardMonth').type(creditCardMonth)
        cy.get(':nth-child(10) > .control-label').should('have.text', 'Year')
        cy.get('#creditCardYear').type(creditCardYear)
        cy.get(':nth-child(11) > .control-label').should('have.text', 'Name on Card')
        cy.get('#nameOnCard').type(nameOnCard)
        cy.get('.controls > .btn').click()
        cy.get('h1').should('have.text', 'Thank you for your purchase today!')
    }
    completeForm() //chamando exec
}

)

Cypress.Commands.add('flightChoice', () => {
    cy.visit("www.blazedemo.com/")
    cy.get('h1').contains('Welcome to the Simple Travel Agency!')
    cy.get('body > :nth-child(3) > :nth-child(1)').contains('Choose your departure city')
    cy.get('[name="fromPort"]').select('Boston')
    cy.get('form > h2').contains('Choose your destination city').contains('Choose your destination city')
    cy.get('[name="toPort"]').select('London')
    cy.get('form > .container > .btn')
        .click()

    cy.get('thead > tr > :nth-child(1)').contains('Choose')
    cy.get(':nth-child(1) > :nth-child(2) > .btn').contains('Choose This Flight')
        .click()

    cy.get('body > :nth-child(2) > :nth-child(2)').should('have.text', 'Airline: United')
    cy.get('body > :nth-child(2) > :nth-child(4)').should('have.text', 'Price: 400')
    cy.get(':nth-child(2) > :nth-child(8)').contains('Please submit the form below to purchase the flight')
    cy.get(':nth-child(2) > .control-label').should('have.text', 'Name')

}

)

Cypress.Commands.add('apiTests', () => {
    cy.request({
        method: 'GET',
        url: 'https://www.blazedemo.com/reserve.php',

    }).then(function (response) {
        expect(response.status).to.equal(200)

    })

    cy.request({
        method: 'POST',
        url: 'https://www.blazedemo.com/confirmation.php',

    }).then(function (response) {
        expect(response.status).to.equal(200)
    })
})

describe("Listing Apply Form", () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
    cy.get(':nth-child(1) > .listing > a').click()
  })

  it("allows users to subscribe", () => {
    cy.get('#first-name').type("Jhon")
    cy.get('#last-name').type("Doe")
    cy.get('#email').type("jhondoe1@email.com")
    cy.get('.primary').click()
  })
})
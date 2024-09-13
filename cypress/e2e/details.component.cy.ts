describe("Listing Apply Form", () => {
  beforeEach(() => {
    cy.fixture("locations").as("locationsData");
    cy.intercept("GET", "/locations", { fixture: "locations" }).as(
      "getLocations"
    );
    cy.fixture("0").as("0Data");
    cy.intercept("GET", "/locations/0", { fixture: "0" }).as(
      "get0"
    );
  })

  it("allows users to subscribe", () => {
    cy.visit('/')
    cy.wait("@getLocations")
    cy.get(':nth-child(1) > .listing > a').click()
    cy.wait("@get0")
    cy.get('#first-name').type("Jhon")
    cy.get('#last-name').type("Doe")
    cy.get('#email').type("jhondoe1@email.com")
    cy.get('.primary').click()
  })
})
describe("The Home Page", () => {
  beforeEach(() => {
    cy.fixture("locations").as("locationsData");
    cy.intercept("GET", "/locations", { fixture: "locations" }).as(
      "getLocations"
    );
  });

  it("Display homes from API on load", () => {
    cy.visit("/");
    cy.wait("@getLocations");
    cy.get(".listing").should("have.length", 4);
  });
});

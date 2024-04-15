/// <reference types="cypress" />

describe("Currency Tracker App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should toggle theme when switch is clicked", () => {
    cy.get("#switch-theme").click({ force: true });
    cy.get("[data-theme='light']").should("exist");

    cy.get("#switch-theme").click({ force: true });
    cy.get("[data-theme='dark']").should("exist");
  });
});

/// <reference types="cypress" />

describe("MapSearch", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/bank-card");
  });

  it("should update the search string in ElasticSearch component", () => {
    cy.get(".bank-search__input").should("have.value", "");

    cy.get(".bank-search__input").type("USD");

    cy.get(".bank-search__input").should("have.value", "USD");
  });
});

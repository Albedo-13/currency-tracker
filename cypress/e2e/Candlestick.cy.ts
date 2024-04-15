/// <reference types="cypress" />

describe('CandlestickChart', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/timeline');
  });

  it('should display the chart', () => {
    cy.get('.chart-wrapper canvas').should('exist');
  });

  it('should filter the chart data', () => {
    const fromDate = '2024-04-01';
    const toDate = '2024-04-07';

    cy.get('.chart-filters__date').first().type(fromDate);
    cy.get('.chart-filters__date').last().type(toDate);
    cy.get('.chart__button').contains('Filter').click();


  });

  it('should open the modal', () => {
    cy.get('.chart__button').contains('Custom data').click();
    cy.get('.modal').should('be.visible');
  });

  it('should select a different option in the Select component', () => {
    cy.get('.ui-select').should('have.value', 'USD');

    cy.get('.ui-select').select('EUR');

    cy.get('.ui-select').should('have.value', 'EUR');
  });
});
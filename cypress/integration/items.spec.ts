// Copyright 2022,
// Jurrit van der Ploeg

describe('Regions', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.contains('regions').click();

    cy.url()
      .should('include', '/regions/discover');
    cy.get('li')
      .should('have.length', 6);
  });

  it('navigates to Saba', () => {
    cy.contains('North America').click();
    cy.contains('Saba').click();
  });

  it('navigates to Baden-Württemberg', () => {
    cy.contains('Europe').click();
    cy.contains('Germany').click();
    cy.contains('Baden-Württemberg').click();
  });
});

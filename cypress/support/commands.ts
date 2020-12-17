export default () => {
  Cypress.Commands.add('dateOfBirth', (day: string, month: string, year: string) => {
    cy.get('a').type(day);
    cy.get('').type(month);
    cy.get('').type(year);
  });
};

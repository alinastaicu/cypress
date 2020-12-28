declare namespace Cypress {
  interface Chainable {
    sign(moves?: { x: number; y: number }[]): Cypress.Chainable<Response>;
  }
}

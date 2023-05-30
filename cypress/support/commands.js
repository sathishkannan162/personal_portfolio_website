// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('bUrl', (subUrl) => {
  const baseUrl = Cypress.config().baseUrl;
  const fullUrl = new URL(subUrl, baseUrl);
  return fullUrl.toString();
});

Cypress.Commands.add('checkUrl', (url) => {
  cy.bUrl(url).then((expectedUrl) => {
    cy.url().should('eq', expectedUrl);
  });
});

// Cypress.Commands.add('ChakraRender', (component) => {
//   cy.mount(<ChakraProvider>{component}</ChakraProvider>);
// });

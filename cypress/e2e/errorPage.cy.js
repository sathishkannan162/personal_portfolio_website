describe('Error page', () => {
  // page not found
  it('Not found page', () => {
    cy.visit('/hello');
    cy.checkUrl('/hello');
    cy.getByData('error-oops').should('have.text', 'Oops!');
    cy.getByData('error-message').should('have.text', 'Not Found');
  });

  // project tag not found
  it('Project tag not found', () => {
    cy.visit('/projects/bello');
    cy.getByData('error-oops').should('have.text', 'Oops!');
    cy.getByData('error-message').should(
      'have.text',
      'no such project tag found'
    );
  });
});

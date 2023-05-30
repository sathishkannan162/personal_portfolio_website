describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact'); // Adjust the URL if necessary
  });

  it('displays the correct headings', () => {
    cy.getByData('contact-page').within(() => {
      cy.get('h2').should('have.text', 'Contact'); // Assuming the Heading component renders an h1 element
      cy.get('h3').should('have.text', 'Emails:');
    });
  });

  it('displays the correct email addresses', () => {
    cy.getByData('contact-page').within(() => {
      cy.get('a[href="mailto:sathishkannan162@gmail.com"]').should(
        'have.text',
        'sathishkannan162@gmail.com'
      );

      cy.get('a[href="mailto:sathishkannan6000@gmail.com"]').should(
        'have.text',
        'sathishkannan6000@gmail.com'
      );
    });
  });

  it('displays the contact message', () => {
    cy.getByData('contact-page').within(() => {
      cy.contains(
        'If you need help with any projects, please free to ☎️contact me.'
      );
    });
  });
});

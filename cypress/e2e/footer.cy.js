const socialIconLabels = [
  'Twitter',
  'Instagram',
  'LinkedIn',
  'Facebook',
  'Github',
];

describe('Footer', () => {
  beforeEach('visit homepage', () => {
    cy.visit('/');
  });
  it('check rights', () => {
    cy.getByData('footer-rights').should(
      'have.text',
      '© 2023 Sathish Kannan. All rights reserved'
    );
  });
  it('check source code link', () => {
    cy.getByData('footer-source-code')
      .should('have.text', 'Source Code on github')
      .should('have.attr', 'href');
  });
  it('check social icons', () => {
    let socialIcons = cy.getByData('social-icon');
    socialIcons.its('length').should('eq', 5);
    socialIcons = cy.getByData('social-icon');
    socialIcons.each(($el, index) => {
      cy.wrap($el)
        .should('have.text', socialIconLabels[index])
        .should('have.attr', 'href');
    });
  });
});


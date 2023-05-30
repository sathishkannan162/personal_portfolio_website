import certificationsInfoArray from '../../../src/data/certificationsInfoArray';

describe('Certifications Page', () => {
  beforeEach(() => {
    cy.visit('/certifications');
  });

  it('displays the heading', () => {
    cy.contains('Certifications').should('be.visible');
  });

  it('displays the certificate cards', () => {
    cy.get('[data-test="certificate-card"]').should(
      'have.length',
      certificationsInfoArray.length
    ); // Assuming there are 3 certificates in the certificationsInfoArray

    cy.get('[data-test="certificate-card"]').each(($card, index) => {
      cy.wrap($card).within(() => {
        cy.scrollTo(0, 200 * index);
        cy.get('h2').should('be.visible');
        cy.get('h2')
          .first()
          .should('have.text', certificationsInfoArray[index].name);
        cy.get('h2')
          .last()
          .within(() => {
            cy.get('p')
              .first()
              .should('have.text', certificationsInfoArray[index].name);
            cy.get('p')
              .eq(1)
              .should('have.text', certificationsInfoArray[index].provider);
            cy.get('p').last().should('have.text', 'Click Card to View');
          });
        cy.get('a').should(
          'have.attr',
          'href',
          certificationsInfoArray[index].certificateUrl
        );
      });
    });
  });

  it('opens the certificate URL in a new tab', () => {
    cy.get('[data-test="certificate-card"]')
      .first()
      .within(() => {
        cy.get('a').should('have.attr', 'target', '_blank');
      });
  });
  it('scroll smoothly to the bottom', () => {
    cy.scrollTo('bottom', { duration: 2000 });
    cy.scrollTo('top', { duration: 2000 });
  });
});

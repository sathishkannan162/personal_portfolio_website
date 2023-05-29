import milestoneInfoArray from '../../src/data/milestoneInfoArray.js';

describe('Milestones page', () => {
  beforeEach('Visit Milestones page', () => {
    cy.visit('/milestones');
    cy.wait(500);
  });
  it('count milestone cards', () => {
    cy.getByData('milestone-desktop')
      .its('length')
      .should('eq', milestoneInfoArray.length);
    const milestoneCards = cy.getByData('milestone-desktop');
    const milestoneTitles = cy.getByData('milestone-title');
    milestoneCards.each(($el) => {
      cy.scrollTo(0, 40);
      cy.wrap($el).should('be.visible');
    });
    milestoneTitles.each(($el, index) => {
      cy.scrollTo(0, 220 * index, { duration: 800 });
      cy.wrap($el)
        .should('be.visible')
        .should('have.text', milestoneInfoArray[index].title);
      cy.scroll;
    });
  });
});

describe('Milestones Page', () => {
  before(() => {
    cy.viewport('iphone-6'); // Set initial viewport to mobile
    cy.visit('/milestones'); // Replace with the actual URL of the Milestones page
  });

  context('Mobile Viewport', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
      cy.visit('/milestones');
    });

    it('should display milestone-mobile cards on mobile viewport', () => {
      cy.get('[data-test="milestone-mobile"]').should('have.length', 11);
    });

    it('should display correct milestone information on mobile viewport', () => {
      cy.get('[data-test="milestone-mobile"]').each((milestone, index) => {
        cy.wrap(milestone).within(() => {
          cy.get('[data-test="milestone-title"]').should(
            'contain',
            milestoneInfoArray[index].title
          );
          cy.get('[data-test="milestone-date"]').should(
            'contain',
            milestoneInfoArray[index].date
          );
          cy.get('[data-test="milestone-description"]').should(
            'contain',
            milestoneInfoArray[index].description
          );
        });
      });
    });
  });

  context('Desktop Viewport', () => {
    beforeEach(() => {
      cy.viewport('macbook-13');
      cy.visit('/milestones');
    });

    it('should display milestone-desktop cards on desktop viewport', () => {
      cy.get('[data-test="milestone-desktop"]').should('have.length', 11);
    });

    it('should display correct milestone information on desktop viewport', () => {
      cy.get('[data-test="milestone-desktop"]').each((milestone, index) => {
        cy.wrap(milestone).within(() => {
          cy.get('[data-test="milestone-title"]').should(
            'contain',
            milestoneInfoArray[index].title
          );
          cy.get('[data-test="milestone-date"]').should(
            'contain',
            milestoneInfoArray[index].date
          );
          cy.get('[data-test="milestone-description"]').should(
            'contain',
            milestoneInfoArray[index].description
          );
        });
      });
    });
  });

  after(() => {
    cy.viewport('macbook-13'); // Set viewport to desktop after the tests
  });
});

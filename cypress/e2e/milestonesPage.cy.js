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
    milestoneCards.each(($el, index) => {
      cy.scrollTo(0, 40);
      // cy.wait(1000);
      cy.wrap($el).should('be.visible');
      // cy.scrollTo(0, 220 * index, { duration: 800 });
      // .find(['data-test="milestone-title"'])
      // .find('.chakra-stack');
      // .should('have.text', milestoneInfoArray[index].title);
    });
    milestoneTitles.each(($el, index) => {
      cy.scrollTo(0, 220 * index, { duration: 800 });
      // cy.window().then((win) => {
      //    win.scrollBy(0, win.innerHeight * 0.20)
      //  })
      cy.wait(1000);
      cy.wrap($el)
        .should('be.visible')
        .should('have.text', milestoneInfoArray[index].title);
      cy.scroll;
    });
  });
});


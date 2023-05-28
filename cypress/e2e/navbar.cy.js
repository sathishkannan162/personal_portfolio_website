const navLinks = [
  '/',
  // '/projects',
  '/milestones',
  '/certifications',
  '/about',
  '/contact',
];

const navText = [
  /Home/,
  // /Projects/,
  /Milestones/,
  /Certifications/,
  /About/,
  /Contact/,
];

import projectTags from '../../src/data/projectTags';
const projectTagsAll = ['All Projects', ...projectTags];
const projectTagsLinks = ['', ...projectTags];

describe('Navbar links', () => {
  beforeEach(
    ('Visit Homepage',
    () => {
      cy.visit('/');
    })
  );
  context('Click navbar links', () => {
    it('Check Navlinks', () => {
      const navButton = cy.getByData('navlink-browser');
      navButton.each(($el, index) => {
        const element = cy.wrap($el);
        element.click();
        element.invoke('text').should('match', navText[index]);
        cy.checkUrl(navLinks[index]);
        // cy.wait(3000);
        // cy.scrollTo('bottom', { duration: 1000 });
      });
    });
    it('pop over visible when hovering', () => {
      // get projects button
      const popoverTriggerBrowser = cy.getByData('popover-trigger-browser');
      // mobile popover items
      cy.getByData('popover-item-mobile').should('not.be.visible');

      // browser pop over items
      const popoverItemsBrowser = cy.getByData('popover-item-browser');
      // pop over should become visible only when hovering over projects button
      popoverItemsBrowser.should('not.be.visible');
      cy.scrollTo(0, 100);
      // popoverTriggerBrowser.click(); //modify to hover
      popoverTriggerBrowser.trigger('mouseover');
      cy.wait(1000); // pop over needs time to be visible due to opacity animation duration of 0.5s
      popoverItemsBrowser.should('be.visible');
      // check projects button text
      popoverTriggerBrowser.invoke('text').should('match', /Projects/);
    });
    it('click pop overbuttons', () => {
      // get projects button
      const popoverTriggerBrowser = cy.getByData('popover-trigger-browser');
      const popoverItemsBrowser = cy.getByData('popover-item-browser');

      // pop over should become visible only when hovering over projects button
      cy.scrollTo(0, 100);
      popoverTriggerBrowser.trigger('mouseover');
      cy.wait(1000); // pop over needs time to be visible due to opacity animation duration of 0.5s

      popoverItemsBrowser.each(($el, index) => {
        const element = cy.wrap($el);
        element.should('have.text', projectTagsAll[index]);
        element.click();
        if (index === 0) {
          cy.checkUrl(`/projects`);
        } else {
          cy.checkUrl(`/projects/${projectTagsLinks[index]}`);
          cy.getByData('project-list-title').should(
            'have.text',
            `${projectTagsAll[index]} Projects`
          );
        }
      });
    });
    it('hover over project button', () => {});
  });
});

import projectsInfoArray from '../../../src/data/projectInfoArray.js';

describe('Homepage', () => {
  beforeEach('Visit Homepage', () => {
    cy.visit('/');
  });

  context('Navbar', () => {
    it('click site logo', () => {
      cy.getByData('site-logo').click();
    });

    it('site name is visiible', () => {
      cy.getByData('sitename');
      cy.get('[data-test="sitename"]').should('have.text', 'Sathish Kannan');
    });
  });

  context('Hero Section', () => {
    it('check hero image Width and Height', () => {
      cy.getByData('hero-image').should('have.css', 'width', '500px');
      cy.getByData('hero-image').should('have.css', 'height', '500px');
    });
  });

  context('Project Section', () => {
    it('project section', function () {
      cy.get('[data-test="project-list-title"]').should(
        'have.text',
        'Projects'
      );
    });

    it('project card visible', () => {
      const projectList = cy.getByData('project-card');
      projectList.each(($el) => {
        cy.wrap($el).should('not.be.visible');
      });
      cy.wait(1000); // Wait for 1 second

      cy.scrollTo('bottom', { duration: 2000 }); // Scroll to the bottom with a duration of 2 seconds
      projectList.each(($el) => {
        cy.wrap($el).should('be.visible');
      });
    });

    it('project cards have target attribute', () => {
      const projectList = cy.getByData('project-card');
      projectList.each(($el) => {
        cy.wrap($el).should('have.attr', 'target', '_blank');
      });
    });

    it('project cards have correct links', () => {
      // testing cypress opening in new window is complex and didn't work here
      cy.scrollTo('bottom', { duration: 1000 }); // Scroll to the bottom with a duration of 2 seconds
      const projectList = cy.getByData('project-card');
      projectList.each(($el, index) => {
        cy.wrap($el).should('have.attr', 'href', projectsInfoArray[index].link);
      });
    });
  });
  context('All projects button', () => {
    it('Click button', () => {
      const button = cy.getByData('button-all-projects');
      button.should('have.text', 'All Projects');
      button.click();
      cy.checkUrl('/projects');
    });
  });
});

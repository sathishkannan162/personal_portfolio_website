import projects from '../../../src/data/projectInfoArray.js';
import filterProjectsByTag from '../../../src/components/ProjectsPage/helpers/filterProjectsByTags.js';
let featuredProject = projects[1];

describe('Projects Page', () => {
  beforeEach(() => {
    cy.visit('/projects'); // Assuming the Projects page is accessible at '/projects'
  });
  it('should display the featured project', () => {
    cy.get('[data-test="featured-project"]').should('be.visible');
  });

  it('should navigate to the featured project when clicked', () => {
    cy.get('[data-test="featured-project-link"]').should(
      'have.attr',
      'target',
      '_blank'
    );
    cy.get('[data-test="featured-project-link"]').should(
      'have.attr',
      'href',
      featuredProject.link
    );
  });

  it('should display the project list', () => {
    cy.get('[data-test="project-list"]').should('be.visible');
  });

  it('should display the project cards', () => {
    cy.get('[data-test="project-card"]').should('have.length', projects.length);
  });

  it('should navigate to a project when clicked', () => {
    const projectCards = cy.get('[data-test="project-card"]');
    projectCards.each(($el, index) => {
      cy.wrap($el).should('have.attr', 'href', projects[index].link);
      cy.wrap($el).should('have.attr', 'target', '_blank');
      cy.wrap($el).within(() => {
        cy.get('[data-test="project-tag"]').each(($el, tagIndex) => {
          cy.wrap($el).should('have.text', projects[index].tags[tagIndex]);
        });
      });
    });
    // cy.url().should('include', projects[0].link);
  });

  it('should filter projects by tag React', () => {
    const selectedTag = 'React';
    const filteredProjects = filterProjectsByTag(projects, selectedTag);
    cy.get('[data-test="tag-select"]').click().type('Rea').type('{enter}');
    // cy.get('[data-test="project-card"]').first().should('contain', selectedTag);
    const projectCards = cy.get('[data-test="project-card"]');
    projectCards.each(($el, index) => {
      cy.wrap($el).should('have.attr', 'href', filteredProjects[index].link);
      cy.wrap($el).should('have.attr', 'target', '_blank');
      cy.wrap($el).within(() => {
        cy.get('[data-test="project-tag"]').each(($el, tagIndex) => {
          cy.wrap($el).should(
            'have.text',
            filteredProjects[index].tags[tagIndex]
          );
        });
      });
    });
    // cy.url().should('include', projects[0].link);
  });
  it.only('should filter projects by tag Nodejs', () => {
    const selectedTag = 'Nodejs';
    const filteredProjects = filterProjectsByTag(projects, selectedTag);
    cy.get('[data-test="tag-select"]').click().type('No').type('{enter}');
    cy.get('[data-test="project-card"]').first().should('contain', 'GPT3.5');
    const projectCards = cy.get('[data-test="project-card"]');
    projectCards.each(($el, index) => {
      cy.wrap($el).should('have.attr', 'href', filteredProjects[index].link);
      cy.wrap($el).should('have.attr', 'target', '_blank');
      cy.wrap($el).within(() => {
        cy.get('[data-test="project-tag"]').each(($el, tagIndex) => {
          cy.wrap($el).should(
            'have.text',
            filteredProjects[index].tags[tagIndex]
          );
        });
      });
    });

    cy.scrollTo('bottom', { duration: 500 });
    cy.scrollTo('top', { duration: 100 });
    cy.get('[data-test="tag-select"]')
      .trigger('hover')
      .within(() => {
        // clear field
        cy.get('button').first().click();
      });
  });
});

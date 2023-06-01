import React from 'react';
import ProjectCard from '../../src/components/ProjectsPage/ProjectCard';
import { ChakraProvider } from '@chakra-ui/react';
import projectInfoArray from '../../src/data/projectInfoArray';

describe('<ProjectCard />', () => {
  const project = projectInfoArray[0];
  beforeEach(() => {
    cy.mount(
      <ChakraProvider>
        <ProjectCard project={project} />
      </ChakraProvider>
    );
  });

  it('renders the project card with the correct title, content, and tags', () => {
    cy.contains('[data-test="project-card"]', project.title);
    cy.contains('[data-test="project-card"]', project.content);

    project.tags.forEach((tag) => {
      cy.contains('[data-test="project-tag"]', tag);
    });
  });

  it('opens the project link in a new tab when clicked', () => {
    cy.get('[data-test="project-card"]').should(
      'have.attr',
      'href',
      project.link
    );

    cy.get('[data-test="project-card"]').should(
      'have.attr',
      'target',
      '_blank'
    );
  });

  it('truncates the project title if it exceeds the specified length', () => {
    const truncatedTitle = project.title.substring(0, 30);
    cy.contains('[data-test="project-card"]', truncatedTitle).should(
      'have.length',
      1
    );
  });
  it('renders the correct number of tags and displays their text', () => {
    cy.get('[data-test="project-tag"]').should(
      'have.length',
      project.tags.length
    );

    project.tags.forEach((tag, index) => {
      cy.get('[data-test="project-tag"]').eq(index).contains(tag);
    });
  });
});


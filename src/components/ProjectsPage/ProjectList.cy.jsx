import React from 'react';
import ProjectList from './ProjectList';
import { ChakraProvider } from '@chakra-ui/react';
import projectInfoArray from '../../data/projectInfoArray';
import truncateBlogTitle from './helpers/truncateBlogTitle';
import filterProjectsByTag from './helpers/filterProjectsByTags';

describe('<ProjectList />', () => {
  it('renders the project list with the given title', () => {
    const title = 'My Projects';
    const projects = [
      { projectID: 1, title: 'Project 1' },
      { projectID: 2, title: 'Project 2' },
    ];

    cy.mount(
      <ChakraProvider>
        <ProjectList title={title} skip={0} interactive={true} />
      </ChakraProvider>
    );

    projectInfoArray.map((project, index) => {
      cy.wait(100);
      cy.contains(
        '[data-test="project-card"]',
        truncateBlogTitle(project.title, 30)
      ).should('be.visible');
      cy.scrollTo(0, 250 * index);
    });
  });

  it('filters the projects by tag', () => {
    const title = 'My Projects';
    const filteredProjectsByTag = filterProjectsByTag(
      projectInfoArray,
      'Nodejs'
    );
    cy.mount(
      <ChakraProvider>
        <ProjectList title={title} interactive={true} skip={0} />
      </ChakraProvider>
    );

    cy.get('[data-test="tag-select"]').click().type('no').type('{enter}');
    cy.get('[data-test="project-card"]').should(
      'not.be.contain',
      projectInfoArray[0].title
    );
    filteredProjectsByTag.map((project, index) => {
      cy.wait(100);
      cy.contains(
        '[data-test="project-card"]',
        truncateBlogTitle(project.title, 30)
      ).should('be.visible');
      cy.scrollTo(0, 250 * index);
    });
  });
});

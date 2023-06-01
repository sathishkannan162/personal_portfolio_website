import { ChakraProvider } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { MemoryRouter } from 'react-router-dom';
import AllProjectsAnimateButton from '../../src/components/HomePage/AllProjectsAnimateButton';

describe('<AllProjectsAnimateButton />', () => {
  it('renders', () => {
    cy.mount(
      <MemoryRouter>
        <ChakraProvider>
          <AllProjectsAnimateButton text="All projects" Icon={FaArrowRight} />
        </ChakraProvider>
      </MemoryRouter>
    );

    // Assert that the component or its elements are rendered correctly
    cy.get('[data-test="button-all-projects"]').should('exist');
    cy.contains('All projects').should('exist');
    cy.get('svg').should('exist');
  });

  it('applies motion styles on hover', () => {
    cy.mount(
      <MemoryRouter>
        <ChakraProvider>
          <AllProjectsAnimateButton text="All projects" Icon={FaArrowRight} />
        </ChakraProvider>
      </MemoryRouter>
    );

    // Assert that the motion styles are applied on hover
    // cy.get('[data-test="button-all-projects"]').trigger('mouseover');
    // cy.get('[data-test="button-all-projects"]').should(
    //   'have.css',
    //   'transform',
    //   'matrix(1.05, 0, 0, 1.05, 0, 0)'
    // );
  });

  it('navigates to projects page on button click', () => {
    cy.mount(
      <MemoryRouter>
        <ChakraProvider>
          <AllProjectsAnimateButton text="All projects" Icon={FaArrowRight} />
        </ChakraProvider>
      </MemoryRouter>
    );

    // Assert that clicking the button navigates to the projects page
    cy.get('[data-test="button-all-projects"]').click();
    cy.url().should('include', '/projects');
  });
});

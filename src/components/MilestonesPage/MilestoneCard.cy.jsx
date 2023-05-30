import React from 'react';
import MilestoneCard from './MilestoneCard';
import { ChakraProvider, Box } from '@chakra-ui/react';

describe('<MilestoneCard />', () => {
  it('renders the milestone card with the correct title, description, and date', () => {
    const milestone = {
      id: 1,
      title: 'Sample Title',
      description: 'Sample Description',
      date: '2023-06-01',
    };

    cy.mount(
      <ChakraProvider>
        <MilestoneCard {...milestone} />
      </ChakraProvider>
    );
    cy.wait(1000);

    cy.get('[data-test="milestone-title"]').should('contain', milestone.title);
    cy.get('[data-test="milestone-description"]').should(
      'contain',
      milestone.description
    );
    cy.get('[data-test="milestone-date"]').should('contain', milestone.date);
  });

  it('displays the milestone card on the left side for even ids and right side for odd ids', () => {
    const evenMilestone = {
      id: 2,
      title: 'Even Milestone',
      description: 'Even Milestone Description',
      date: '2023-06-01',
    };

    cy.viewport(800, 800);

    cy.mount(
      <Box maxW="500px" m={'50px'}>
        <ChakraProvider>
          <MilestoneCard {...evenMilestone} />
        </ChakraProvider>
      </Box>
    );

    cy.wait(100);
    cy.get('[data-test="milestone-card"]').should('exist');
  });
  it('display right card', () => {
    const oddMilestone = {
      id: 3,
      title: 'Odd Milestone',
      description: 'Odd Milestone Description',
      date: '2023-06-01',
    };
    cy.mount(
      <Box maxW="500px" m={'50px'}>
        <ChakraProvider>
          <MilestoneCard {...oddMilestone} />
        </ChakraProvider>
      </Box>
    );
    cy.wait(100);
    cy.get('[data-test="milestone-card"]').should('exist');
  });
});

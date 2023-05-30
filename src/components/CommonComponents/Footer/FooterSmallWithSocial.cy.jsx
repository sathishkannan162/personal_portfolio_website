import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import SmallWithSocial from './Footer';

describe('<SmallWithSocial />', () => {
  beforeEach(() => {
    cy.mount(
      <ChakraProvider>
        <SmallWithSocial />
      </ChakraProvider>
    );
  });

  it('renders the footer', () => {
    cy.get('[data-test="footer"]').should('exist');
  });

  it('renders the footer rights text', () => {
    cy.get('[data-test="footer-rights"]').should(
      'have.text',
      '© 2023 Sathish Kannan. All rights reserved'
    );
  });

  it('renders the source code link', () => {
    cy.get('[data-test="footer-source-code"]').should(
      'have.attr',
      'href',
      'https://github.com/sathishkannan162/personal_portfolio_website'
    );
  });

  it('renders the Twitter social icon', () => {
    cy.get('[data-test="social-icon"]').contains('Twitter').should('exist');
  });

  it('renders the Instagram social icon', () => {
    cy.get('[data-test="social-icon"]').contains('Instagram').should('exist');
  });

  it('renders the LinkedIn social icon', () => {
    cy.get('[data-test="social-icon"]').contains('LinkedIn').should('exist');
  });

  it('renders the Facebook social icon', () => {
    cy.get('[data-test="social-icon"]').contains('Facebook').should('exist');
  });

  it('renders the Github social icon', () => {
    cy.get('[data-test="social-icon"]').contains('Github').should('exist');
  });
});


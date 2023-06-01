import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AboutPage from '../../src/components/AboutPage/AboutPage';

describe('<AboutPage />', () => {
  beforeEach(() => {
    cy.mount(
      <ChakraProvider>
        <AboutPage />
      </ChakraProvider>
    );
  });

  it('renders the About Me heading', () => {
    cy.contains('About Me').should('be.visible');
  });

  it('displays the profile photo', () => {
    cy.get('img').should(
      'have.attr',
      'src',
      'https://projectimages.netlify.app/my_photos/my_photo_about.jpg'
    );
  });

  it('renders the personal blog link', () => {
    cy.contains('Checkout my personal blog:')
      .find('a')
      .should('have.attr', 'href', 'https://sathishkannan162.github.io');
  });

  it('renders the LinkedIn link', () => {
    cy.contains('LinkedIn').should(
      'have.attr',
      'href',
      'https://www.linkedin.com/in/sathish-kannan-a48a39166/'
    );
  });

  it('renders the Twitter link', () => {
    cy.contains('Twitter').should(
      'have.attr',
      'href',
      'https://twitter.com/Sathish06030039'
    );
  });

  it('renders the Instagram link', () => {
    cy.contains('Instagram').should(
      'have.attr',
      'href',
      'https://www.instagram.com/satishkannan162/'
    );
  });

  it('renders the Facebook link', () => {
    cy.contains('Facebook').should(
      'have.attr',
      'href',
      'https://www.facebook.com/sathishkannan.m.3'
    );
  });
  it('make scroll test', () => {
    cy.scrollTo('bottom', { duration: 200 });
    cy.scrollTo('top', { duration: 200 });
  });
});
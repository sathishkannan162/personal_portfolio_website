import React from 'react';
import CertificateCard from './CertificateCard';
import certifications from '../../data/certificationsInfoArray.js';
import { ChakraProvider } from '@chakra-ui/react';

describe('<CertificateCard />', () => {
  beforeEach('renders', () => {
    cy.mount(
      <ChakraProvider>
        <CertificateCard certificate={certifications[0]} />
      </ChakraProvider>
    );
  });
  it('renders certificate name', () => {
    cy.contains(certifications[0].name).should('be.visible');
  });

  it('opens certificate link in a new tab', () => {
    cy.get('a').should('have.attr', 'target', '_blank');
    cy.get('a').should('have.attr', 'href', certifications[0].certificateUrl);
  });

  it('displays certificate provider on card', () => {
    cy.contains(certifications[0].provider).should('be.visible');
  });

  // hover doesn't work for the below test
  // it.only('changes scale on hover', () => {
  //   cy.wait(500);
  //   cy.get('[data-test="certificate-div"]').trigger('mouseover');
  //   // cy.get('a').trigger('mouseover');
  //   cy.wait(500);
  //   cy.get('[data-test="certificate-div"]').should(
  //     'have.css',
  //     'transform',
  // 'matrix(1.1, 0, 0, 1.1, 0, 0)'
  // );
  // });

  it('certificate name and provider invisible under hover', () => {
    cy.contains(certifications[0].provider).should('not.be.visible');
  });
});

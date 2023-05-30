// import React from 'react';
// import SocialButton from './SocialButton';
// import { ChakraProvider } from '@chakra-ui/react';
// import { FaLinkedin } from 'react-icons/fa';

// describe('<SocialButton />', () => {
//   it('renders', () => {
//     // see: https://on.cypress.io/mounting-react
//     cy.mount(
//       <ChakraProvider>
//         <SocialButton href="/" label="test" data-test="social-icon">
//           <FaLinkedin />
//         </SocialButton>
//       </ChakraProvider>
//     );
//   });
// });

import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import SocialButton from './SocialButton';
import { ChakraProvider } from '@chakra-ui/react';

describe('<SocialButton />', () => {
  let socialButtonProps;

  beforeEach(() => {
    socialButtonProps = {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sathish-kannan-a48a39166/',
    };

    cy.mount(
      <ChakraProvider>
        <SocialButton {...socialButtonProps}>
          <FaLinkedin />
        </SocialButton>
      </ChakraProvider>
    );
  });

  it('renders the social button', () => {
    cy.get('a').should('exist');
  });

  it('renders the correct label', () => {
    cy.get('span').first().should('have.text', socialButtonProps.label);
  });

  it('has the correct background color when hovered', () => {
    // cy.get('a')
    //   .trigger('mouseover')
    //   .should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.get('a')
      .trigger('mouseover')
      .should(($element) => {
        const backgroundColor = Cypress.$($element).css('background-color');
        const rgbaValues = backgroundColor.match(/(\d+)/g);
        const lastAlphaValue = parseFloat(rgbaValues[3]);
        expect(lastAlphaValue).to.be.closeTo(0, 0.1);
      });
  });

  it('navigates to the correct URL when clicked', () => {
    cy.get('a').should('have.attr', 'href', socialButtonProps.href);
  });
});


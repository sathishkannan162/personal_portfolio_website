describe('TopScrollIndicator Component', () => {
  beforeEach(() => {
    cy.visit('/milestones'); // Replace '/milestones' with the actual URL of the page
  });

  it('renders the scroll bar', () => {
    cy.get('[data-test="scroll-bar"]').should('exist');
  });

  it('has the correct initial styling', () => {
    cy.get('[data-test="scroll-bar"]').should('have.css', 'position', 'fixed');
    cy.get('[data-test="scroll-bar"]').should('have.css', 'top', '0px');
    cy.get('[data-test="scroll-bar"]').should('have.css', 'left', '0px');
    cy.get('[data-test="scroll-bar"]').should('have.css', 'right', '0px');
    cy.get('[data-test="scroll-bar"]').should('have.css', 'height', '4px');
    cy.get('[data-test="scroll-bar"]').should(
      'have.css',
      'background-color',
      'rgb(173, 216, 230)'
    );
    cy.get('[data-test="scroll-bar"]').should(
      'have.css',
      'transform-origin',
      '0px 2px'
    );
    cy.get('[data-test="scroll-bar"]').should(
      'have.css',
      'transform',
      'matrix(0, 0, 0, 1, 0, 0)'
    );
    cy.get('[data-test="scroll-bar"]').should('have.css', 'z-index', '1');
  });

  it('scales the scroll bar based on scrollYProgress', () => {
    cy.scrollTo('bottom');
    // cy.get('[data-test="scroll-bar"]').should(
    //   'have.css',
    //   'transform',
    //   'matrix(1, 0, 0, 1, 0, 0)'
    // ); // Assuming scrollYProgress = 1

    cy.scrollTo('top');
    cy.get('[data-test="scroll-bar"]').should(
      'have.css',
      'transform',
      'matrix(0, 0, 0, 1, 0, 0)'
    ); // Assuming scrollYProgress = 0
  });
  it('scales the scroll bar based on scrollYProgress', () => {
    cy.scrollTo('bottom');
    cy.get('[data-test="scroll-bar"]').should(($div) => {
      const transform = $div.css('transform');
      expect(transform).to.satisfy((value) => {
        // Check if the value is approximately equal to 'matrix(1, 0, 0, 1, 0, 0)'
        // expectedValue = 'matrix(1, 0, 0, 1, 0, 0)';
        const tolerance = 0.1;
        const regex =
          /^matrix\(([\d.e-]+),\s*([\d.e-]+),\s*([\d.e-]+),\s*([\d.e-]+),\s*([\d.e-]+),\s*([\d.e-]+)\)$/;
        const matches = regex.exec(value);
        if (matches) {
          const [_, a, b, c, d, e, f] = matches.map(parseFloat);
          return (
            Math.abs(a - 1) < tolerance &&
            Math.abs(b) < tolerance &&
            Math.abs(c) < tolerance &&
            Math.abs(d - 1) < tolerance &&
            Math.abs(e) < tolerance &&
            Math.abs(f) < tolerance
          );
        }
        return false;
      });
    });
    //  headless browser shows error for the test below. But works on real browsers.

    // cy.scrollTo('top');
    // cy.get('[data-test="scroll-bar"]').should(($div) => {
    //   const transform = $div.css('transform');
    //   expect(transform).to.satisfy((value) => {
    //     // Check if the value is approximately equal to 'matrix(0, 0, 0, 1, 0, 0)'
    //     //  expectedValue = 'matrix(0, 0, 0, 1, 0, 0)';
    //     const tolerance = 0.1;
    //     const regex =
    //       /^matrix\(([\d.e-]+),\s*([\d.e-]+),\s*([\d.e-]+),\s*([\d.e-]+),\s*([\d.e-]+),\s*([\d.e-]+)\)$/;
    //     const matches = regex.exec(value);
    //     if (matches) {
    //       const [_, a, b, c, d, e, f] = matches.map(parseFloat);
    //       return (
    //         Math.abs(a) < tolerance &&
    //         Math.abs(b) < tolerance &&
    //         Math.abs(c) < tolerance &&
    //         Math.abs(d - 1) < tolerance &&
    //         Math.abs(e) < tolerance &&
    //         Math.abs(f) < tolerance
    //       );
    //     }
    //     return false;
    //   });
    // });
  });
});

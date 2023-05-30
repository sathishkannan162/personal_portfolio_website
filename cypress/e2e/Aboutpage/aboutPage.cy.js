describe('About Page', () => {
  beforeEach(() => {
    cy.visit('/about'); // Assuming the page URL is '/about'
  });

  it('displays the heading', () => {
    cy.getByData('about-page').within(() => {
      cy.get('h2').should('contain', 'About Me');
    });
  });

  it('displays the photo', () => {
    cy.getByData('about-page').within(() => {
      cy.get('img').should(
        'have.attr',
        'src',
        'https://projectimages.netlify.app/my_photos/my_photo_about.jpg'
      );
    });
  });

  it('displays the text content', () => {
    cy.getByData('about-page').within(() => {
      cy.contains('I am Sathish Kannan').should('exist');
      cy.contains('I recently graduated from').should('exist');
      cy.contains('I have good technical proficienty').should('exist');
      cy.contains(
        'Currently, I am building products that integrates with'
      ).should('exist');
      cy.contains('Checkout my personal blog').should('exist');
      cy.contains('https://sathishkannan162.github.io').should(
        'have.attr',
        'href',
        'https://sathishkannan162.github.io'
      );
      cy.contains('Checkout my LinkedIn').should('exist');
      cy.contains('Twitter').should('exist');
      cy.contains('Instagram').should('exist');

      cy.contains('Facebook').should('exist');
    });
  });
});

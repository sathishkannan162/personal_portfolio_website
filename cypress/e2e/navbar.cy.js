const navLinks = [
  '/',
  // '/projects',
  '/milestones',
  '/certifications',
  '/about',
  '/contact',
];

const navText = [
  /Home/,
  // /Projects/,
  /Milestones/,
  /Certifications/,
  /About/,
  /Contact/,
];

describe('Navbar links', () => {
  beforeEach(
    ('Visit Homepage',
    () => {
      cy.visit('/');
    })
  );
  it('Check Navlinks', () => {
    const navButton = cy.getByData('navlink-browser');
    navButton.each(($el, index) => {
      const element = cy.wrap($el);
      element.click();
      element.invoke('text').should('match', navText[index]);
      cy.checkUrl(navLinks[index]);
      // cy.wait(3000);
      // cy.scrollTo('bottom', { duration: 1000 });
    });
  });
});

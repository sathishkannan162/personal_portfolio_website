describe('simulate mouse movements in user journeys', () => {
  beforeEach('visit homepage', () => {
    cy.visit('/');
  });
  it('visit all projects from homepage', () => {
    cy.scrollTo('bottom', { duration: 500 });
    cy.getByData('button-all-projects').click();
    cy.checkUrl('/projects');
    cy.getByData('featured-project-link').trigger('mouseover');
    cy.scrollTo(0, 400, { duration: 500 });
    cy.getByData('tag-select')
      .click()
      .type('Re')
      .type('{enter}')
      .clear()
      .type('c')
      .type('{enter}')
      .clear()
      .type('data')
      .type('{enter}')
      .within(() => {
        cy.get('button').first().click();
      });
    cy.scrollTo('bottom', { duration: 1000 });
    cy.scrollTo('top', { duration: 1000 });
  });
  it('visit milestones page', () => {
    cy.get('[data-cy="Milestones"]').click();
    cy.checkUrl('/milestones');
    cy.scrollTo('bottom', { duration: 1000 });
    cy.scrollTo('top', { duration: 1000 });
  });
  it('visit certifications page', () => {
    cy.get('[data-cy="Certifications"]').click();
    cy.checkUrl('/certifications');
    cy.scrollTo('bottom', { duration: 1000 });
    cy.scrollTo('top', { duration: 1000 });
  });
  it('visit about page', () => {
    cy.get('[data-cy="About"]').click();
    cy.checkUrl('/about');
    cy.scrollTo('bottom', { duration: 1000 });
    cy.scrollTo('top', { duration: 1000 });
    cy.getByData('site-logo').click();
    cy.checkUrl('/');
  });
  it('visit contact page', () => {
    cy.get('[data-cy="Contact"]').click();
    cy.checkUrl('/contact');
    cy.scrollTo('bottom', { duration: 1000 });
    cy.scrollTo('top', { duration: 1000 });
    cy.getByData('sitename').click();
    cy.checkUrl('/');
  });
});

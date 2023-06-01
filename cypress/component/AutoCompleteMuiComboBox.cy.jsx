import React from 'react';
import projectTags from '../../src/data/projectTags';
import TestCombobox from '../../src/components/componentTesting/TestCombobox';

describe('<ComboBox />', () => {
  let options = projectTags.map((tag) => {
    return { label: tag };
  });
  const mockOptions = options;
  beforeEach(() => {
    cy.mount(<TestCombobox />);
  });

  it('renders the ComboBox component', () => {
    cy.get('[data-test="tag-select"]').should('exist');
  });

  it('displays the options in the autocomplete dropdown', () => {
    cy.get('[data-test="tag-select"]').click();

    mockOptions.forEach((option) => {
      cy.contains('[role="listbox"] [role="option"]', option.label);
    });
  });

  it('updates the text value when input changes', () => {
    const inputText = 'React';

    cy.get('[data-test="tag-select"]')
      .click()
      .wait(500)
      .type('Rea')
      .type('{enter}');
    cy.get('[data-test="tag-select"] input').should(
      'have.attr',
      'value',
      inputText
    );
  });

  it('select option based by click', () => {
    const selectedOption = mockOptions[2];

    // cy.get('[data-test="tag-select"]').click().type('Rea').type('{enter}');
    cy.get('[data-test="tag-select"]').click();
    cy.contains(
      // '[role="listbox"] [role="option"]',
      '[role="option"]',
      selectedOption.label
    ).click();

    cy.get('[data-test="tag-select"]');
    cy.get('[data-test="tag-select"] input').should(
      'have.attr',
      'value',
      selectedOption.label
    );
  });
});

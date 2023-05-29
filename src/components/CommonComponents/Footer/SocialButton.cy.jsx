import React from 'react'
import SocialButton from './SocialButton'

describe('<SocialButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SocialButton />)
  })
})
import React from 'react';
import { render, screen } from '../test-utils'
import SmallWithSocial from '../../components/CommonComponents/Footer/Footer';

describe('SmallWithSocial', () => {
  it('renders the footer component with correct text and links', () => {
    render(<SmallWithSocial />);

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();

    const footerRights = screen.getByTestId('footer-rights');
    expect(footerRights).toHaveTextContent('© 2023 Sathish Kannan. All rights reserved');

    const sourceCodeLink = screen.getByTestId('footer-source-code');
    expect(sourceCodeLink).toHaveAttribute('href', 'https://github.com/sathishkannan162/personal_portfolio_website');
    expect(sourceCodeLink).toHaveAttribute('target', '_blank');
    expect(sourceCodeLink).toHaveTextContent('Source Code on github');

    const socialIcons = screen.getAllByTestId('social-icon');
    expect(socialIcons).toHaveLength(5);

    socialIcons.forEach((socialIcon) => {
      expect(socialIcon).toBeInTheDocument();
      expect(socialIcon).toHaveAttribute('href');
    });
  });
  it('captures and compares component snapshot', () => {
    const { asFragment } = render(<SmallWithSocial />);
    expect(asFragment()).toMatchSnapshot();
  });
});

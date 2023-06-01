import React from 'react';
import { render, screen } from '../test-utils'
import SocialButton from '../../components/CommonComponents/Footer/SocialButton'

describe('SocialButton', () => {
  it('renders the button with correct label and href', () => {
    const label = 'F';
    const href = 'https://www.facebook.com';

    render(
      <SocialButton label={label} href={href}>
        <span>Facebook Icon</span>
      </SocialButton>
    );

    const button = screen.getByRole('link');
    expect(button).toHaveTextContent(label)
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', href);

    const icon = screen.getByText('Facebook Icon');
    expect(icon).toBeInTheDocument();
  });
  it('captures and compares component snapshot', () => {
    const { asFragment } = render(<SocialButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});

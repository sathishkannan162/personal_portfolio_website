import React from 'react';
import { render, screen } from '../test-utils';
import Certifications from '../../components/CertificationsPage/Certifications';
import certificationsInfoArray from '../../data/certificationsInfoArray';

class IntersectionObserver {
  // constructor(callback, options) {}
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  observe(target) {
    this.target = target;
    this.callback([
      {
        isIntersecting: true,
        target: this.target,
      },
    ]);
  }

  unobserve() { }
}

window.IntersectionObserver = IntersectionObserver;
describe('certifications page', () => {
test('renders Certifications component correctly', () => {
  render(
    <Certifications />
  );

  // Verify that the heading is rendered
  const headingElement = screen.getByRole('heading', { name: /certifications/i });
  expect(headingElement).toBeInTheDocument();

  // Verify that the CertificateCard components are rendered
  const certificateCardElements = screen.getAllByTestId('certificate-card');
  expect(certificateCardElements).toHaveLength(certificationsInfoArray.length);
});
    test('captures and compares component snapshot', () => {
        const { asFragment } = render(<Certifications />);
        expect(asFragment()).toMatchSnapshot();
    });

})

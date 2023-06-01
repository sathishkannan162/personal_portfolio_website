import React from 'react';
import { render, screen } from '../test-utils'
import CertificateCard from '../../components/CertificationsPage/CertificateCard.jsx';

// Framer motion requires browsser
// Mock the framer-motion package
// jest.mock('framer-motion', () => ({
//   motion: {
//     div: ({ children }) => <div>{children}</div>, 
//   },
// }));

const mockCertificate = {
  name: 'Certificate Name',
  certificateUrl: 'https://example.com',
  imageUrl: 'https://example.com/image.jpg',
  provider: 'Certificate Provider',
};

describe('CertificateCard', () => {
  test('renders certificate card correctly', () => {
    class IntersectionObserver {
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

    render(<CertificateCard certificate={mockCertificate} />);

    // Verify that the certificate name is rendered
    expect(screen.queryAllByText(mockCertificate.name)).toHaveLength(2)
    expect(screen.queryAllByText(mockCertificate.name)[0]).toBeInTheDocument();
    expect(screen.queryAllByText(mockCertificate.name)[1]).toBeInTheDocument();

    // Verify that the certificate link is rendered with the correct URL
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', mockCertificate.certificateUrl);
    expect(linkElement).toHaveAttribute('target', '_blank');

    // Verify that the certificate image placeholder is rendered
    const imageElement = screen.getByAltText('placeholder image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveStyle({ opacity: '0' });
  });
  test('captures and compares component snapshot', () => {
    const { asFragment } = render(<CertificateCard certificate={mockCertificate} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '../test-utils'
// import { render, screen } from '@testing-library/react'
import AboutPage from '../../components/AboutPage/AboutPage'
import {ChakraProvider} from '@chakra-ui/react'

describe('AboutPage component', () => {
  it('renders heading', () => {
    render(<ChakraProvider><AboutPage /></ChakraProvider>)
    const headingElement = screen.getByTestId('about-page')
    expect(headingElement).toBeInTheDocument();
  });

  it('renders image with correct source', () => {
    const { getByRole } = render(<AboutPage />);
    const imageElement = getByRole('img');
    expect(imageElement).toHaveAttribute(
      'src',
      'https://projectimages.netlify.app/my_photos/my_photo_about.jpg'
    );
  });

  it('renders about page', () => {
    render(<AboutPage />);
    const textElement = screen.getByText('I am Sathish Kannan. I recently graduated from 🎓IIT Bombay. I am a self taught🤸 full stack developer.', { exact: false });
    expect(textElement).toBeInTheDocument();
  });

  it('renders personal blog link', () => {
    const { getByRole } = render(<AboutPage />);
    const blogLinkElement = getByRole('link', { name: 'https://sathishkannan162.github.io' });
    expect(blogLinkElement).toBeInTheDocument();
    expect(blogLinkElement).toHaveAttribute('href', 'https://sathishkannan162.github.io');
  });

  it('renders LinkedIn link', () => {
    const { getByRole } = render(<AboutPage />);
    const linkedInLinkElement = getByRole('link', { name: 'LinkedIn' });
    expect(linkedInLinkElement).toBeInTheDocument();
    expect(linkedInLinkElement).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/sathish-kannan-a48a39166/'
    );
  });
  it('renders Twitter link link', () => {
    const { getByRole } = render(<AboutPage />);
    const linkedInLinkElement = getByRole('link', { name: 'Twitter' });
    expect(linkedInLinkElement).toBeInTheDocument();
    expect(linkedInLinkElement).toHaveAttribute(
      'href',
      "https://twitter.com/Sathish06030039"
    );
  });
  it('renders Instagram link', () => {
  const { getByRole } = render(<AboutPage />);
  const instagramLinkElement = getByRole('link', { name: 'Instagram' });
  expect(instagramLinkElement).toBeInTheDocument();
  expect(instagramLinkElement).toHaveAttribute(
    'href',
    'https://www.instagram.com/satishkannan162/'
  );
});

it('renders Facebook link', () => {
  const { getByRole } = render(<AboutPage />);
  const facebookLinkElement = getByRole('link', { name: 'Facebook' });
  expect(facebookLinkElement).toBeInTheDocument();
  expect(facebookLinkElement).toHaveAttribute(
    'href',
    'https://www.facebook.com/sathishkannan.m.3'
  );
});
    it('captures and compares component snapshot', () => {
        const { asFragment } = render(<AboutPage />);
        expect(asFragment()).toMatchSnapshot();
    });
});

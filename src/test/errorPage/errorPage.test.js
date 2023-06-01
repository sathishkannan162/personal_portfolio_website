// eslint-disable-next-line no-unused-vars
import React from 'react';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { render, screen } from '@testing-library/react'

jest.mock('react-router-dom', () => ({
  useRouteError: jest.fn(),
}));

describe('ErrorPage', () => {
  it('renders error page with error message', () => {
    const errorMock = {
      statusText: 'Not Found',
      message: 'Page not found',
    };

    // Mock the useRouteError hook to return the error object
    jest.spyOn(require('react-router-dom'), 'useRouteError').mockReturnValue(errorMock);

    const {asFragment} = render(<ErrorPage />);
    expect(asFragment()).toMatchSnapshot();

    // Check if the error page is rendered
    const errorPage = screen.getByTestId('error-page');
    expect(errorPage).toBeInTheDocument();

    // Check if the error message is rendered with the correct text
    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage).toHaveTextContent('Not Found');
  });

  it('renders error page with default message when error is undefined', () => {
    // Mock the useRouteError hook to return undefined
    jest.spyOn(require('react-router-dom'), 'useRouteError').mockReturnValue(undefined);

    const {asFragment} = render(<ErrorPage />);
    expect(asFragment()).toMatchSnapshot();

    // Check if the error page is rendered
    const errorPage = screen.getByTestId('error-page');
    expect(errorPage).toBeInTheDocument();

    // Check if the default error message is rendered
    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage).toHaveTextContent('Sorry, an unexpected error has occurred.');
  });
});

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  if (!error) {
    return (
      <div data-test="error-page">
        <div data-test="error-message">Sorry, an unexpected error has occurred.</div>
      </div>
    );
  }

  return (
    <div id="error-page" data-test="error-page" >
      <h1 data-test="error-oops">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i data-test="error-message">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

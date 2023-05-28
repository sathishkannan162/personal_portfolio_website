import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 data-test="error-oops">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i data-test="error-message">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

import Pagecontainer from '../CommonComponents/PageContainer';

export default function ErrorProjectTagPage({ message }) {
  return (
    <Pagecontainer>
      <div id="error-page">
        <h1 data-test="error-oops">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <i data-test="error-message">{message}</i>
      </div>
    </Pagecontainer>
  );
}

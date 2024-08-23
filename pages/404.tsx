import LayoutError from '../layouts/404';

const ErrorPage = () => (
  <LayoutError>

    <section className="error-page">
      <div className="container">
        <h1>Not Found</h1>
        <p>Oops. Looks like this page doesn't exist</p>
        <a href="#" className="btn btn--rounded btn--yellow">Go to home</a>
      </div>
    </section>

  </LayoutError>
)

export default ErrorPage
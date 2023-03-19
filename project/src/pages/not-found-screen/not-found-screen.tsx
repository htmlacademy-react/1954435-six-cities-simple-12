import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import './not-found-screen.css';

export default function NotFoundScreen() {
  return (
    <div className="page page--gray page--not-found">
      <Helmet>
        <title>Six cities: page not found</title>
      </Helmet>

      <main className="page__main page__main--not-found">
        <div className="container">
          <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p>Page Not Found</p>
            <Link className="not-found__link" to="/">Home Page</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

import {Helmet} from 'react-helmet-async';

import Header from '../../components/header/header';
import Login from '../../components/login/login';


export default function LoginScreen() {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Six cities: sign in</title>
      </Helmet>

      <Header hasNavigation={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">

          <Login />

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#todo">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

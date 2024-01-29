import {Helmet} from 'react-helmet-async';

import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import RandomCity from '../../components/random-city/random-city';


export default function LoginScreen() {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Six cities: sign in</title>
      </Helmet>

      <Header hasNavigation={false} />

      <main className="page__main page__main--login">
        <div className="page__login-container container">

          <LoginForm />

          <RandomCity />

        </div>
      </main>
    </div>

  );
}

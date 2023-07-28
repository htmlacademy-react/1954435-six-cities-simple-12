import { useRef, FormEvent } from 'react';
import { /*useNavigate*/ Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginLoader from '../login-loader/login-loader';

export default function LoginForm() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const isLoginLoadingStatus = useAppSelector(
    (state) => state.offers.isLoginLoadingStatus
  );
  const authorizationStatus = useAppSelector(
    (state) => state.offers.authorizationStatus
  );

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && passwordRef.current.value.length > 6 ) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (authorizationStatus === AuthorizationStatus.Authorized) {
    return <Navigate to ={AppRoute.Main} />;
  }

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        onSubmit={handleSubmit}
        className="login__form form"
        action="#"
        method="post"
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            ref={loginRef}
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            ref={passwordRef}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          /*onClick={() => navigate(AppRoute.Main)}*/
          className="login__submit form__submit button"
          type="submit"
        >
          {isLoginLoadingStatus ? <LoginLoader /> : 'Sign in'}
        </button>
      </form>
    </section>
  );
}

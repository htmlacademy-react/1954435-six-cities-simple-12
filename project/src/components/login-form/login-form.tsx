import { useRef, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { REGEXP_EMAIL,REGEXP_PASS } from '../../const';
import LoginLoader from '../login-loader/login-loader';


export default function LoginForm() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();


  const isLoginLoadingStatus = useAppSelector(
    (state) => state.offers.isLoginLoadingStatus
  );


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const validateDataForm = ():boolean => {
    if(loginRef.current === null || passwordRef.current === null){
      return false;
    }

    const emailValue = loginRef.current.value;
    const passValue = passwordRef.current.value;

    return REGEXP_EMAIL.test(emailValue) && REGEXP_PASS.test(passValue);

  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const isValid = validateDataForm();

    if (loginRef.current !== null && passwordRef.current !== null && isValid ) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };


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
          className="login__submit form__submit button"
          type="submit"
        >
          {isLoginLoadingStatus ? <LoginLoader /> : 'Sign in'}
        </button>
      </form>
    </section>
  );
}

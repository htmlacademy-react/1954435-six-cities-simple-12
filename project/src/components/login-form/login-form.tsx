import { useRef, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { REGEXP_EMAIL, REGEXP_PASS} from '../../const';
import LoginLoader from '../login-loader/login-loader';
import { getLoginStatus } from '../../store/user-data/selectors';

export default function LoginForm() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const status = useAppSelector(getLoginStatus);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const validateDataForm = (): boolean => {
    if (loginRef.current === null || passwordRef.current === null) {
      return false;
    }

    const emailValue = loginRef.current.value;
    const passValue = passwordRef.current.value;

    const isEmailValid = REGEXP_EMAIL.test(emailValue);
    if (!isEmailValid) {
      toast.error('Введите корректный Email', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return false;
    }

    const isPasswordValid = REGEXP_PASS.test(passValue);
    if (!isPasswordValid) {
      toast.error('Пароль должен состоять минимум из одной буквы и цифры', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      return false;
    }

    return isEmailValid && isPasswordValid;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const isValid = validateDataForm();

    if (loginRef.current !== null && passwordRef.current !== null && isValid) {
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
        <ToastContainer />
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
        <button className="login__submit form__submit button" type="submit">
          {status.isPending ? <LoginLoader /> : 'Sign in'}
        </button>
      </form>
    </section>
  );
}


import { useForm, SubmitHandler} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
//import { ToastContainer, /*toast*/ } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { REGEXP_EMAIL, REGEXP_PASS } from '../../const';
import LoaderButton from '../loader-button/loader-button';
import { getLoginStatus } from '../../store/user/selectors';
import styles from './login-form.module.css';

const schema = yup.object({
  email: yup
    .string()
    .matches(
      REGEXP_EMAIL,
      {message: 'Please enter correct E-mail'}
    )
    .required(),
  password: yup
    .string()
    .matches(
      REGEXP_PASS,
      {message: 'Please enter correct Password, that has at least one number and one letter'}
    )
    .required(),
}).required();


export default function LoginForm() {
  const {register, handleSubmit, reset, formState:{errors, isValid}
  } = useForm<AuthData> ({resolver: yupResolver(schema), mode: 'onBlur'});

  const dispatch = useAppDispatch();
  const status = useAppSelector(getLoginStatus);

  const onSubmit: SubmitHandler<AuthData> = (authData) => {
    dispatch(loginAction({...authData}));
    reset();
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="login__form form"
        action="#"
        method="post"
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          {errors?.email && (
            <span className={styles.errorMessage}>
              {errors?.email?.message}
            </span>
          )}
          <input
            className="login__input form__input"
            type="email"
            placeholder="Email"
            {...register('email')}
            data-testid="login"
          />
        </div>
        {/*<ToastContainer />*/}
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          {errors?.password && (
            <span className={styles.errorMessage}>
              {errors?.password?.message}
            </span>
          )}
          <input
            className="login__input form__input"
            type="password"
            placeholder="Password"
            {...register('password')}
            data-testid="password"
          />
        </div>
        <button className="login__submit form__submit button" type="submit" disabled={!isValid}>
          {status.isPending ? <LoaderButton /> : 'Sign in'}
        </button>
      </form>
    </section>
  );
}

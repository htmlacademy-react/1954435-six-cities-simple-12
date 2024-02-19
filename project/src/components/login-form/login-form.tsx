import { useForm, SubmitHandler} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { REGEXP_EMAIL, REGEXP_PASS } from '../../const';
import LoaderButton from '../loader-button/loader-button';
import { getLoginStatus } from '../../store/user/selectors';
import styles from './login-form.module.css';

const formFields = {
  email: 'E-mail',
  password: 'Password'
};

type formFieldsKey = keyof typeof formFields;

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
  const formFieldsKeys = Object.keys(formFields) as formFieldsKey[];

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
        {formFieldsKeys.map((key) => {
          const inputClass = cn( 'login__input form__input',
            {[styles.errorInput]: errors?.[key]}
          );

          return(
            <div className="login__input-wrapper form__input-wrapper" key ={key}>
              <label className="visually-hidden">{formFields[key]}</label>
              {errors?.[key] && (
                <span className={styles.errorMessage}>
                  {errors?.[key]?.message}
                </span>
              )}
              <input
                className={inputClass}
                type={key}
                placeholder={formFields[key]}
                {...register(`${key}`)}
                data-testid={key}
              />
            </div>
          );
        })}

        <button className="login__submit form__submit button" type="submit" disabled={!isValid}>
          {status.isPending ? <LoaderButton /> : 'Sign in'}
        </button>
      </form>
    </section>
  );
}

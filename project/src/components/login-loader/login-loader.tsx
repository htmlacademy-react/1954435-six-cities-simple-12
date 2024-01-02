import styles from './login-loader.module.css';

export default function LoginLoader(): JSX.Element {
  return (
    <span className={styles.spinner}>Loading</span>
  );
}

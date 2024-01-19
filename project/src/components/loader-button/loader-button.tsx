import styles from './login-loader.module.css';

export default function LoaderButton(): JSX.Element {
  return (
    <span className={styles.spinner}>Loading</span>
  );
}

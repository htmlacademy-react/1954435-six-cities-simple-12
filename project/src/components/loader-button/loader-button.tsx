import styles from './loader-button.module.css';

export default function LoaderButton(): JSX.Element {
  return (
    <span className={styles.spinner}>Loading</span>
  );
}

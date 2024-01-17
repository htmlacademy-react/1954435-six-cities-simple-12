import {useAppDispatch} from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';
import styles from './error-screen.module.css';


export default function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <p className={styles.text}>Failed to load data</p>
        <button className={styles.btn} onClick={() => { dispatch(fetchOffersAction()); }}>Try again</button>
      </div>
    </div>
  );

}


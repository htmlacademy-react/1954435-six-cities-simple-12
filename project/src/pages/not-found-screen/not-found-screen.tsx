import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import styles from './not-found-screen.module.css';

export default function NotFoundScreen() {
  return (
    <div className="page page--gray page--not-found">
      <Helmet>
        <title>Six cities: page not found</title>
      </Helmet>

      <main className="page__main page__main--not-found">
        <div className={styles.wrapper}>
          <section className={styles.box}>
            <h1 className={styles.text}>404</h1>
            <p className={styles.text}>Page Not Found</p>
            <Link className={styles.link} to="/">Home Page</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

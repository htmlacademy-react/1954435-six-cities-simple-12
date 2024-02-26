import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function HeaderSignIn() {

  return (
    <li className="header__nav-item user" data-testid="header-nav">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

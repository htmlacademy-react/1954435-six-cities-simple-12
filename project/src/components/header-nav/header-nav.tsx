import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user/selectors';

import HeaderProfile from '../header-profile/header-profile';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import HeaderSignIn from '../header-sign-in/header-sign-in';

export default function HeaderNav() {
  const status = useAppSelector(getAuthStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {status.isAuthorized ? (
          <>
            <HeaderProfile />
            <HeaderSignOut />
          </>
        ) : (
          <HeaderSignIn />
        )}
      </ul>
    </nav>
  );
}

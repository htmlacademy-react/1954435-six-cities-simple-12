import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

import HeaderProfile from '../header-profile/header-profile';
import HeaderSignOut from '../header-sign-out/header-sign-out';
import HeaderSignIn from '../header-sign-in/header-sign-in';

export default function HeaderNav() {
  const authorizationStatus = useAppSelector((state) => state.offers.authorizationStatus);
  const isUserLogged = authorizationStatus === AuthorizationStatus.Authorized;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          isUserLogged ?
            <>
              <HeaderProfile />
              <HeaderSignOut />
            </>
            : <HeaderSignIn />
        }
      </ul>
    </nav>
  );
}

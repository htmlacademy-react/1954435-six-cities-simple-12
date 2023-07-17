import HeaderProfile from '../header-profile/header-profile';
import HeaderSignOut from '../header-sign-out/header-sign-out';
//import HeaderSignIn from '../header-sign-in/header-sign-in';


export default function HeaderNav() {

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        <HeaderProfile />

        <HeaderSignOut/>

      </ul>
    </nav>
  );
}

import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

type HeaderProps = {
  hasNavigation: boolean;
};

export default function Header(props: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <Logo />

          {props.hasNavigation && <HeaderNav />}

        </div>
      </div>
    </header>
  );
}

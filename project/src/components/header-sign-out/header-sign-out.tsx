import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { MouseEvent } from 'react';

export default function HeaderSignOut() {
  const dispatch = useAppDispatch();

  const handleSignOutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <li className="header__nav-item">
      <a className="header__nav-link" href="todo" onClick={handleSignOutClick}>
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppRoute } from '../../const';


import MainScreen from '../../pages/main-screen/main-screen';
import LoginScren from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppProps = {
  roomCardCount: number;
};


export default function App({roomCardCount}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen roomCardCount={roomCardCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScren />}
        />
        <Route
          path={AppRoute.Offer}
          element={<RoomScreen />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

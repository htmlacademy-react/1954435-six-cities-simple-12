import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute } from '../../const';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScren from '../../pages/login-screen/login-screen';
import RoomScreen from '../../pages/room-screen/room-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

import {Offers} from '../../types/offer';
//import {Reviews} from '../../types/review';

type AppProps = {
  offers: Offers;
  //reviews: Reviews;
};


export default function App(props: AppProps): JSX.Element {
  const {offers, /*reviews*/} = props;
  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScren />}
          />
          <Route
            path={AppRoute.Offer}
            element={<RoomScreen /*reviews={reviews}*/ />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

import {useEffect, Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkAuthAction } from '../../store/api-actions';
import { AppRoute } from '../../const';
import { getAuthStatus } from '../../store/user/selectors';
import Loader from '../loader/loader';
import MainScreen from '../../pages/main-screen/main-screen';

const LoginScren = lazy(() => import('../../pages/login-screen/login-screen'));
const RoomScreen = lazy(() => import('../../pages/room-screen/room-screen'));
const NotFoundScreen = lazy(() => import('../../pages/not-found-screen/not-found-screen'));


export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (authorizationStatus.isPending) {
    return <Loader />;
  }


  return(
    <Suspense fallback={<Loader />}>
      <HelmetProvider>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen />}
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
      </HelmetProvider>
    </Suspense>
  );
}

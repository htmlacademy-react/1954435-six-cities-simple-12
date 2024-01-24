import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import MainScreenContent from '../../components/main-sreen-content/main-screen-content';
import Loader from '../../components/loader/loader';
import ErrorScreen from '../error-screen/error-screen';
import { getOffersStatus } from '../../store/offers/selectors';
import { getCurrentCity} from '../../store/app/selector';
import { fetchOffersAction } from '../../store/api-actions';


export default function MainScreen() {
  const status = useAppSelector(getOffersStatus);
  const currentCity = useAppSelector(getCurrentCity);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  if (status.isLoading) {
    return <Loader />;
  }

  if (status.isError) {
    return <ErrorScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <Header hasNavigation />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CityList currentCity={currentCity} />

        <MainScreenContent />

      </main>
    </div>
  );
}

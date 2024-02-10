import { Helmet } from 'react-helmet-async';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import CityList from '../../components/city-list/city-list';
import MainScreenContent from '../../components/main-sreen-content/main-screen-content';
import Loader from '../../components/loader/loader';
import ErrorScreen from '../error-screen/error-screen';
import { getOffersStatus, getIsOfferEmpty } from '../../store/offers/selectors';
import { getCurrentCity} from '../../store/app/selector';
import { fetchOffersAction } from '../../store/api-actions';


export default function MainScreen() {
  const status = useAppSelector(getOffersStatus);
  const currentCity = useAppSelector(getCurrentCity);
  const isOfferEmpty = useAppSelector(getIsOfferEmpty);

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
    <div className="page page--gray page--main" data-testid="main-screen">
      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <Header hasNavigation />

      <main className={cn('page__main page__main--index',{'page__main--index-empty':isOfferEmpty})}>
        <h1 className="visually-hidden">Cities</h1>

        <CityList currentCity={currentCity} />

        <MainScreenContent />

      </main>
    </div>
  );
}

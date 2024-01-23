import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import Header from '../../components/header/header';
import LocationNav from '../../components/location-nav/location-nav';
import Sorting from '../../components/sorting/sorting';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import Loader from '../../components/loader/loader';
import ErrorScreen from '../error-screen/error-screen';
import { getRenderedOffers, getOffersStatus } from '../../store/offers/selectors';
import { getCurrentCity, getselectOffer } from '../../store/app/selector';
import { fetchOffersAction } from '../../store/api-actions';


export default function MainScreen() {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCurrentCity);
  const renderedOffers = useAppSelector(getRenderedOffers);
  const status = useAppSelector(getOffersStatus);
  const selectedOfferId = useAppSelector(getselectOffer);

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

        <LocationNav currentCity={currentCity} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {renderedOffers.length} places to stay in {currentCity}
              </b>

              <Sorting />

              <div className="cities__places-list places__list tabs__content">
                <OfferList className="cities__card" offers={renderedOffers} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                className="cities__map"
                offers={renderedOffers}
                activePointId={selectedOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

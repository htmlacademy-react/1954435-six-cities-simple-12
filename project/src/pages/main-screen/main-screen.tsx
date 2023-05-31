import {Helmet} from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import SvgUpper from '../../components/svg-upper/svg-upper';
import Header from '../../components/header/header';
import LocationNav from '../../components/location-nav/location-nav';
import Sorting from '../../components/sorting/sorting';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';


export default function MainScreen() {

  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);

  return (
    <div className="page page--gray page--main">
      <SvgUpper/>

      <Helmet>
        <title>Six cities</title>
      </Helmet>
      <Header hasNavigation/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <LocationNav />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>

              <Sorting/>

              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={offers} />
              </div>

            </section>
            <div className="cities__right-section">

              <Map className="cities__map"/>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

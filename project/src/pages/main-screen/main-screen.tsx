import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import SvgUpper from '../../components/svg-upper/svg-upper';
import Header from '../../components/header/header';
import LocationNav from '../../components/location-nav/location-nav';
import Sorting from '../../components/sorting/sorting';
import OfferList from '../../components/offer-list/offer-list';
//import {Offers} from '../../types/offer';
import Map from '../../components/map/map';


export default function MainScreen() {

  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);

  const [activeCardId, setActiveCardId] = useState<number|null>(null);

  const onListItemHover = (id: number | null) => {setActiveCardId(id);};

  const filteredOffersByCity = offers.filter((offer)=>(offer.city.name === currentCity));

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
              <b className="places__found">{filteredOffersByCity.length} places to stay in {currentCity}</b>

              <Sorting/>

              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={filteredOffersByCity} onListItemHover={onListItemHover} />
              </div>

            </section>
            <div className="cities__right-section">

              <Map
                city={filteredOffersByCity[0].city}
                points={filteredOffersByCity}
                selectedOffer={activeCardId}
                isMainMap
              />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

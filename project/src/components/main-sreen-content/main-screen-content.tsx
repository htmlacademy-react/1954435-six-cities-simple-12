import { useAppSelector } from '../../hooks';
import Sorting from '../sorting/sorting';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import { getRenderedOffers } from '../../store/offers/selectors';
import { getCurrentCity, getselectOffer, getCurrentSortType } from '../../store/app/selector';


export default function MainScreenContent(): JSX.Element {
  const renderedOffers = useAppSelector(getRenderedOffers);
  const currentCity = useAppSelector(getCurrentCity);
  const sortType = useAppSelector(getCurrentSortType);
  const selectedOfferId = useAppSelector(getselectOffer);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {renderedOffers.length} places to stay in {currentCity}
          </b>

          <Sorting currentSortType={sortType} />

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
  );
}

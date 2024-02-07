import { useState, useCallback } from 'react';
import { useAppSelector } from '../../hooks';
import cn from 'classnames';
import EmptyOfferMessage from '../empty-offer-message/empty-offer-message';
import Sorting from '../sorting/sorting';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {
  getRenderedOffers,
  getIsOfferEmpty,
} from '../../store/offers/selectors';
import {
  getCurrentCity,
  getCurrentSortType,
} from '../../store/app/selector';

export default function MainScreenContent(): JSX.Element {
  const [selectedOfferId, setSelectedOfferId] = useState<number | null>(null);

  const renderedOffers = useAppSelector(getRenderedOffers);
  const currentCity = useAppSelector(getCurrentCity);
  const sortType = useAppSelector(getCurrentSortType);
  const isOfferEmpty = useAppSelector(getIsOfferEmpty);

  const onCardHover = useCallback((offerId: number | null): void => {
    setSelectedOfferId(offerId);
  }, []);

  return (
    <div className="cities" data-testid="main-screen-content">
      <div
        className={cn('cities__places-container container', {
          'cities__places-container--empty': isOfferEmpty,
        })}
      >
        {isOfferEmpty ? (
          <EmptyOfferMessage currentCity={currentCity} />
        ) : (
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {renderedOffers.length} places to stay in {currentCity}
            </b>

            <Sorting currentSortType={sortType} />

            <div className="cities__places-list places__list tabs__content">
              <OfferList className="cities__card" offers={renderedOffers} onCardHover={onCardHover} />
            </div>
          </section>
        )}

        <div className="cities__right-section">
          {!isOfferEmpty && (
            <Map
              className="cities__map"
              offers={renderedOffers}
              activePointId={selectedOfferId}
            />
          )}
        </div>
      </div>
    </div>
  );
}

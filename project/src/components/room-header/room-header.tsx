import { Offer } from '../../types/offer';
import Badge from '../badge/badge';
import { calculateRatingToPercent } from '../../utils/utils';

type RoomHeaderProps = {
  offer: Offer;
};

export default function RoomHeader({ offer }: RoomHeaderProps) {
  return (
    <>
      {offer.isPremium && <Badge className="property__mark" text="Premium" />}

      <div className="property__name-wrapper">
        <h1 className="property__name">{offer.title}</h1>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span
            style={{ width: `${calculateRatingToPercent(offer.rating)}%` }}
          >
          </span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">
          {offer.rating}
        </span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {offer.type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {offer.bedrooms} {offer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
        </li>
        <li className="property__feature property__feature--adults">
          Max {offer.maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{offer.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </>
  );
}

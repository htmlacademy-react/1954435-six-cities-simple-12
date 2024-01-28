import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Offer } from '../../types/offer';
import Badge from '../badge/badge';
import { formatFirstLetter } from '../../utils/utils';
import { calculateRatingToPercent } from '../../utils/utils';
import { memo } from 'react';

type RoomCardProps = {
  className: string;
  offer: Offer;
  onCardHover?: (offerId: number | null) => void;
};

function RoomCard({ offer, className, onCardHover }: RoomCardProps) {
  return (
    <article
      className={cn('place-card', className)}
      onMouseOver={() => onCardHover?.(offer.id)}
      onMouseLeave={() => onCardHover?.(null)}
    >
      {offer.isPremium && <Badge className="place-card__mark" text="Premium" />}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{ width: `${calculateRatingToPercent(offer.rating)}%` }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{formatFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default memo(RoomCard);

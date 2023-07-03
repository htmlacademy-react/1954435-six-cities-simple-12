import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { selectOffer } from '../../store/offers-actions';
import { Offer } from '../../types/offer';
import Badge from '../badge/badge';

type RoomCardProps = {
  className: string;
  offer: Offer;
};

export default function RoomCard({ offer,className }: RoomCardProps) {
  const dispatch = useAppDispatch();

  return (
    <article
      className={cn('place-card', className)}
      onMouseEnter={() => dispatch(selectOffer(offer.id))}
      onMouseLeave={() => dispatch(selectOffer(null))}
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
            <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

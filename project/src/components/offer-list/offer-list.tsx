import { Offer } from '../../types/offer';
import RoomCard from '../../components/room-card/room-card';
import { memo } from 'react';

type OfferListProps = {
  className: string;
  offers: Offer[];
  onCardHover?: (offerId: number | null) => void;
};

function OfferList({
  offers,
  className,
  onCardHover,
}: OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <RoomCard
          key={offer.id}
          offer={offer}
          className={className}
          onCardHover={onCardHover}
        />
      ))}
    </>
  );
}

export default memo(OfferList);

import { Offer } from '../../types/offer';
import RoomCard from '../../components/room-card/room-card';

type OfferListProps = {
  className: string;
  offers: Offer[];
  onCardHover?: (offerId: number | null) => void;
};

export default function OfferList({
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

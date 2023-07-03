import {Offer} from '../../types/offer';
import RoomCard from '../../components/room-card/room-card';

type OfferListProps = {
  className: string;
  offers: Offer[];
};

export default function OfferList({offers,className}: OfferListProps): JSX.Element {

  return (
    <>
      { offers.map((offer) => <RoomCard key={offer.id} offer={offer} className={className} /> )}
    </>
  );

}

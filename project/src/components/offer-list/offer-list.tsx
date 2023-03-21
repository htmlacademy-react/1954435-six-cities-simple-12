import {Offers} from '../../types/offer';
import RoomCard from '../../components/room-card/room-card';

type OfferListProps = {
  offers: Offers;
};

export default function OfferList({offers}: OfferListProps): JSX.Element {
  return (
    <>
      { offers.map((offer) => <RoomCard key={offer.id} offer={offer}/> )}
    </>
  );
}

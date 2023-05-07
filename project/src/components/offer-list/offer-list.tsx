import {Offers} from '../../types/offer';
import RoomCard from '../../components/room-card/room-card';

type OfferListProps = {
  offers: Offers;
  onListItemHover: (id: number | null) => void;
};

export default function OfferList({offers,onListItemHover}: OfferListProps): JSX.Element {

  return (
    <>
      { offers.map((offer) => <RoomCard key={offer.id} offer={offer} onListItemHover={onListItemHover}/> )}
    </>
  );

}

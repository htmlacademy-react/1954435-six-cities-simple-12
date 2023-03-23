import {Offers} from '../../types/offer';
import RoomCard from '../../components/room-card/room-card';
import { useState } from 'react';

type OfferListProps = {
  offers: Offers;
};

export default function OfferList({offers}: OfferListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState<number|null>();

  return (
    <>
      { offers.map((offer) => <RoomCard key={offer.id} offer={offer} onCardMouseOver={(id)=>{setActiveCardId(id);}}/> )}
    </>
  );

}

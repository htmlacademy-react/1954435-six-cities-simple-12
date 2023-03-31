import { Offer } from '../../types/offer';

type RoomInsideProps = {
  offer: Offer;
};
export default function RoomInside({ offer }: RoomInsideProps) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>

      <ul className="property__inside-list">

        {offer.goods.map((good) => (
          <li key={good} className="property__inside-item">{good}</li>
        ))}
      </ul>
    </div>
  );
}

import {Reviews} from '../../types/review';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';

type RoomReviewsProps = {
  reviews: Reviews;
};

export default function RoomReviews({reviews}:RoomReviewsProps) {
  const authorizationStatus = useAppSelector((state) => state.offers.authorizationStatus);
  const isUserLogged = authorizationStatus === AuthorizationStatus.Authorized;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ReviewList reviews={reviews} />

      {isUserLogged && <ReviewForm/>}

    </section>

  );
}

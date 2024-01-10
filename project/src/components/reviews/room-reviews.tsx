import {Reviews} from '../../types/review';
import { useAppSelector } from '../../hooks';

import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';
import { getAuthStatus } from '../../store/user/selectors';

type RoomReviewsProps = {
  reviews: Reviews;
};

export default function RoomReviews({reviews}:RoomReviewsProps) {
  const status = useAppSelector(getAuthStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ReviewList reviews={reviews} />

      {status.isAuthorized && <ReviewForm/>}

    </section>

  );
}

import {Reviews} from '../../types/review';

import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';

type RoomReviewsProps = {
  reviews: Reviews;
};

export default function RoomReviews({reviews}:RoomReviewsProps) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ReviewList reviews={reviews} />

      <ReviewForm/>
    </section>

  );
}

import { Review } from '../../types/review';
import ReviewItem from '../review-item/review-item';

const MAX_REVIEWS_QUANTITY = 10;

type ReviewListProps = {
  reviews: Review[];
};

export default function ReviewList({ reviews }: ReviewListProps) {
  const visibleReviews = reviews.slice(0, MAX_REVIEWS_QUANTITY);
  return (
    <ul className="reviews__list" data-testid="reviews-list">
      {visibleReviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

import { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import RatingForm from '../rating-form/rating-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { getReviewsStatus } from '../../store/reviews/selectors';

const MIN_TEXT_LENGTH = 50;
const MAX_TEXT_LENGHT = 300;


export default function ReviewForm() {
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>('');

  const dispatch = useAppDispatch();
  const offerId = Number(useParams().id);
  const postReviewstStatus = useAppSelector(getReviewsStatus);

  const isRatingEmpty = (rating === null);
  const isReviewTooShort = (review.length < MIN_TEXT_LENGTH);
  const isReviewTooLong = (review.length > MAX_TEXT_LENGHT);

  const isFormDisabled = isReviewTooShort || isReviewTooLong || isRatingEmpty || postReviewstStatus.isLoading;

  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    setRating(value);
  };

  const textareaChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (review !== '' && rating !== null && offerId !== null) {
      dispatch(sendReviewAction({
        id: offerId,
        comment: review,
        rating,
      }));
    }
  };


  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <RatingForm onRate={ratingChangeHandle} rating={rating}/>

      <textarea onChange={textareaChangeHandle} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled ={isFormDisabled}>Submit</button>
      </div>
    </form>
  );
}

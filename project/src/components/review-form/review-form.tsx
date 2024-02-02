import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RatingForm from '../rating-form/rating-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { getPostReviewStatus } from '../../store/reviews/selectors';
import LoaderButton from '../loader-button/loader-button';

const MIN_TEXT_LENGTH = 50;
const MAX_TEXT_LENGHT = 300;

export default function ReviewForm() {
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState<string>('');

  const dispatch = useAppDispatch();
  const offerId = Number(useParams().id);
  const postReviewstStatus = useAppSelector(getPostReviewStatus);

  const isRatingEmpty = rating === null;
  const isReviewValid = review.length < MIN_TEXT_LENGTH || review.length > MAX_TEXT_LENGHT;

  const isFormDisabled =
    isRatingEmpty ||
    isReviewValid ||
    postReviewstStatus.isLoading;

  useEffect(() => {
    if (postReviewstStatus.isSuccess) {
      setReview('');
      setRating(null);
    }
  }, [postReviewstStatus]);

  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    setRating(value);
  };

  const textareaChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (rating !== null && offerId !== null) {
      dispatch(
        sendReviewAction({
          id: offerId,
          comment: review,
          rating,
        })
      );
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}

      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <RatingForm onRate={ratingChangeHandle} rating={rating} />

      <textarea
        onChange={textareaChangeHandle}
        value={review}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={postReviewstStatus.isLoading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{MIN_TEXT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormDisabled}
        >
          {' '}
          {postReviewstStatus.isLoading ? <LoaderButton /> : 'Submit'}
        </button>
      </div>
    </form>
  );
}

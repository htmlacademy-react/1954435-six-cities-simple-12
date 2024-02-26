import { Fragment, ChangeEvent } from 'react';

type RatingFormProps = {
  onRate: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: number | null;
};

const ratingStars: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

export default function RatingForm({onRate, rating}:RatingFormProps) {

  return(
    <div className="reviews__rating-form form__rating" data-testid="rating-form">
      {ratingStars.map((title, index, array) => {
        const ratingValue = array.length - index;

        return(
          <Fragment key={title}>
            <input className="form__rating-input visually-hidden"
              name="rating" value={ratingValue } id={`${ratingValue}-stars`} onChange={onRate} type="radio" checked={rating === ratingValue} data-testid="rating"
            />
            <label htmlFor={`${ratingValue}-stars`} className="reviews__rating-label form__rating-label" title={title} data-testid="stars-form">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </div>
  );

}

import { FetchStatus } from '../../const';
import { fetchReviewsAction, sendReviewAction } from '../api-actions';
import { ReviewsDataState, reviewsData } from './reviews';
import { makeFakeReviews } from '../../utils/mocks';

const reviews = makeFakeReviews();

describe('Reducer: offerData', () => {
  let state: ReviewsDataState;

  beforeEach(() => {
    state = {
      reviews: [],
      status: FetchStatus.Idle,
      postStatus: FetchStatus.Idle
    };
  });
  it('Should return initial state without additional parameters', () => {
    expect(reviewsData.reducer(undefined,{ type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('fetchReviewsAction test', () => {
    it('should update status to "PENDING" if  fetchReviewsAction pending', () => {
      expect(reviewsData.reducer(state, {type: fetchReviewsAction.pending.type}))
        .toEqual({...state, status: FetchStatus.Pending});
    });

    it('Should load reviews and update status to "SUCCESS" if fetchReviewsAction fulfilled', () => {
      expect(reviewsData.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: reviews}))
        .toEqual({...state, reviews, status: FetchStatus.Success});
    });

    it('Should update status to "ERROR" is fetchReviewsAction rejected', () => {
      expect(reviewsData.reducer(state, {type: fetchReviewsAction.rejected.type}))
        .toEqual({...state, status: FetchStatus.Error});
    });
  });

  describe('sendReviewAction test', () => {
    it('should update postStatus to "PENDING" if sendReviewAction pending', () => {
      expect(reviewsData.reducer(state, {type: sendReviewAction.pending.type}))
        .toEqual({...state, postStatus: FetchStatus.Pending});
    });

    it('Should load reviews and update postStatus to "SUCCESS" if sendReviewAction fulfilled', () => {
      expect(reviewsData.reducer(state, {type: sendReviewAction.fulfilled.type, payload: reviews}))
        .toEqual({...state, reviews, postStatus: FetchStatus.Success});
    });

    it('Should update postStatus to "ERROR" is sendReviewAction rejected', () => {
      expect(reviewsData.reducer(state, {type: sendReviewAction.rejected.type}))
        .toEqual({...state, postStatus: FetchStatus.Error});
    });
  });
});

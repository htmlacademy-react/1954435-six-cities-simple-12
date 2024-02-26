import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { State } from '../../types/state';
import { Review } from '../../types/review';
import { getSortedReviews } from '../../utils/utils';

export const getReviews = (state: State): Review[] =>
  state[NameSpace.Reviews].reviews;
export const getFetchStatus = (state: State): FetchStatus =>
  state[NameSpace.Reviews].status;
export const getPostStatus = (state: State): FetchStatus =>
  state[NameSpace.Reviews].postStatus;

export const getReviewsStatus = createSelector([getFetchStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
}));

export const getPostReviewStatus = createSelector(
  [getPostStatus],
  (status) => ({
    isLoading: status === FetchStatus.Pending,
    isSuccess: status === FetchStatus.Success,
    isError: status === FetchStatus.Error,
  })
);

export const getRenderedReviews = createSelector([getReviews], (reviews) =>
  getSortedReviews(reviews)
);

import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { State } from '../../types/state';
import { Review } from '../../types/review';

export const getReviews = (state: State): Review[] =>
  state[NameSpace.Reviews].reviews;
export const getFetchStatus = (state: State): FetchStatus =>
  state[NameSpace.Reviews].status;

export const getReviewsStatus = createSelector([getFetchStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Error,
}));

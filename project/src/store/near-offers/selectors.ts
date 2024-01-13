import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';

export const getNearOffers = (state: State): Offer[] =>
  state[NameSpace.NearOffers].offersNearBy;
export const getFetchStatus = (state: State): FetchStatus =>
  state[NameSpace.NearOffers].status;

export const getNearOffersStatus = createSelector(
  [getFetchStatus],
  (status) => ({
    isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
    isSuccess: status === FetchStatus.Successed,
    isError: status === FetchStatus.Error,
  })
);

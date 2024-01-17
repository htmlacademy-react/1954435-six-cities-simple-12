import { createSelector } from 'reselect';
import { NameSpace, FetchStatus } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Offers].status;

export const getOffersStatus = createSelector([getStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Error,
}));

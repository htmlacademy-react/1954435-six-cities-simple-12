import { createSelector } from 'reselect';
import { NameSpace, FetchStatus } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';

export const getOffer = (state: State): Offer | null => state[NameSpace.Offer].offer;
export const getStatus = (state: State): FetchStatus => state[NameSpace.Offer].status;

export const getOfferStatus = createSelector([getStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
  isSuccess: status === FetchStatus.Successed,
}));

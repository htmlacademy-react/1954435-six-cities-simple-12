import { createSelector } from 'reselect';
import { NameSpace, FetchStatus } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { getCurrentCity, getCurrentSortType } from '../app/selector';
import { getOffersByCity, getOffersBySortType } from '../../utils/utils';

export const getOffers = (state: State): Offer[] =>
  state[NameSpace.Offers].offers;
export const getStatus = (state: State): FetchStatus =>
  state[NameSpace.Offers].status;

export const getOffersStatus = createSelector([getStatus], (status) => ({
  isLoading: [FetchStatus.Idle, FetchStatus.Pending].includes(status),
  isSuccess: status === FetchStatus.Success,
  isError: status === FetchStatus.Error,
}));

export const getFilteredOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, city) => getOffersByCity(offers, city)
);

export const getRenderedOffers = createSelector(
  [getFilteredOffers, getCurrentSortType],
  (offers, sortType) => getOffersBySortType(offers, sortType)
);

export const getIsOfferEmpty = createSelector(
  [getRenderedOffers],
  (offers) => !offers.length
);

import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

export const loadOfferItem = createAction(
  'data/loadOfferItem',
  (offerItem: Offer) => ({payload: offerItem}));

export const setOfferItemLoadingStatus = createAction(
  'data/setOfferLoadingStatus',
  (isLoading: boolean) => ({ payload: isLoading }));

export const loadReviews = createAction(
  'reviews/load',
  (reviews: Review[]) => ({payload: reviews})
);

export const setReviewsLoadingStatus = createAction(
  'reviews/setLoadingStatus',
  (isLoading: boolean) => ({payload: isLoading})
);

export const loadOffersNearBy = createAction(
  'data/loadNearBy',
  (offers: Offer[]) => ({payload: offers})
);

export const setOffersNearByLoadingStatus = createAction(
  'data/setNearByLoadingStatus',
  (isLoading: boolean) => ({payload: isLoading})
);

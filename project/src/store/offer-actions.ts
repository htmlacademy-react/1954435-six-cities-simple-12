import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const loadOfferItem = createAction(
  'data/loadOfferItem',
  (offerItem: Offer) => ({payload: offerItem}));

export const setOfferItemLoadingStatus = createAction(
  'data/setOfferLoadingStatus',
  (isLoading: boolean) => ({ payload: isLoading }));


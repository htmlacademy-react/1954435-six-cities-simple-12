import { createReducer } from '@reduxjs/toolkit';

import { Offer } from '../types/offer';
import { loadOfferItem, setOfferItemLoadingStatus } from './offer-actions';

type InitialState = {
  offerItem: Offer | null;
  isOfferLoading: boolean;
};

const initialState: InitialState = {
  offerItem: null,
  isOfferLoading: false,
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOfferItem, (state, action) => {
      state.offerItem = action.payload;
    })
    .addCase(setOfferItemLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    });
});

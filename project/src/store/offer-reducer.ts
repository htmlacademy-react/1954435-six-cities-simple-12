import { createReducer } from '@reduxjs/toolkit';

import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { loadOfferItem, setOfferItemLoadingStatus, loadReviews, setReviewsLoadingStatus } from './offer-actions';

type InitialState = {
  offerItem: Offer | null;
  isOfferLoading: boolean;
  reviews: Review[];
  isReviewsLoading: boolean;
};

const initialState: InitialState = {
  offerItem: null,
  isOfferLoading: false,
  reviews: [],
  isReviewsLoading: false,
};

export const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOfferItem, (state, action) => {
      state.offerItem = action.payload;
    })
    .addCase(setOfferItemLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoading = action.payload;
    });
});

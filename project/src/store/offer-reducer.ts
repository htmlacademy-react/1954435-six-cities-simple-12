import { createReducer } from '@reduxjs/toolkit';

import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { loadOfferItem, setOfferItemLoadingStatus, loadReviews, setReviewsLoadingStatus, loadOffersNearBy,setOffersNearByLoadingStatus } from './offer-actions';

type InitialState = {
  offerItem: Offer | null;
  isOfferLoading: boolean;
  reviews: Review[];
  isReviewsLoading: boolean;
  offersNearBy: Offer[];
  isOffersNearBy: boolean;
};

const initialState: InitialState = {
  offerItem: null,
  isOfferLoading: false,
  reviews: [],
  isReviewsLoading: false,
  offersNearBy: [],
  isOffersNearBy: false,

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
    })
    .addCase(loadOffersNearBy, (state, action) => {
      state.offersNearBy = action.payload;
    })
    .addCase(setOffersNearByLoadingStatus, (state, action) => {
      state.isOffersNearBy = action.payload;
    });
});

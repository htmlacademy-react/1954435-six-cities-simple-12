import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  selectOffer,
  changeSortType,
  loadOffers,
  setOffersLoadingStatus,
  loadUserData,
} from './offers-actions';
import { CITIES, SORTS, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';
import { UserData } from '../types/user';

type OffersState = {
  currentCity: string;
  offers: Offers;
  selectedOfferId: number | null;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  userData: UserData | null;
};

const initialState: OffersState = {
  currentCity: CITIES[0],
  offers: [],
  selectedOfferId: null,
  sortType: SORTS[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  userData: null,
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    });
});



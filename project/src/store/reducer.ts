import { createReducer } from '@reduxjs/toolkit';
import { changeCity, selectOffer, changeSortType, loadOffers, requireAuthorization } from './actions';
import { CITIES, SORTS, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';


type InitialState = {
  currentCity: string;
  offers: Offers;
  selectedOfferId: number | null;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  currentCity: CITIES[0],
  offers: [],
  selectedOfferId: null,
  sortType: SORTS[0],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };

import { createReducer } from '@reduxjs/toolkit';
import { changeCity, selectOffer, changeSortType } from './actions';
import { CITIES, SORTS } from '../const';
import { Offers } from '../types/offer';
import { offers } from '../mocks/offers';

type InitialState = {
  currentCity: string;
  offers: Offers;
  selectedOfferId: number | null;
  sortType: string;
};

const initialState: InitialState = {
  currentCity: CITIES[0],
  offers: offers,
  selectedOfferId: null,
  sortType: SORTS[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  });
  builder.addCase(selectOffer, (state, action) => {
    state.selectedOfferId = action.payload;
  });
  builder.addCase(changeSortType, (state, action) => {
    state.sortType = action.payload;
  });
});

export { reducer };

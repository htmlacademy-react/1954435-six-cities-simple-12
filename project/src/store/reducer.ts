import {createReducer} from '@reduxjs/toolkit';
import {changeCity,selectOffer} from './actions';
import { CITIES } from '../const';
import { Offers } from '../types/offer';
import { getOffersByCity } from '../utils';

type InitialState = {
  currentCity: string;
  offers: Offers;
  selectedOfferId: number | null;
};

const initialState:InitialState = {
  currentCity: CITIES[0],
  offers:getOffersByCity(CITIES[0]),
  selectedOfferId: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      state.currentCity = action.payload;
      state.offers = getOffersByCity(action.payload);
    });
  builder
    .addCase(selectOffer,(state,action) =>{
      state.selectedOfferId = action.payload;
    });
});

export {reducer};

import {createReducer} from '@reduxjs/toolkit';
import {changeCity,selectOffer} from './actions';
import { offers } from '../mocks/offers';
import { CITIES } from '../const';
import { Offers } from '../types/offer';

type InitialState = {
  currentCity: string;
  offers: Offers;
  selectedOfferId: number | null;
};

const initialState:InitialState = {
  currentCity: CITIES[0],
  offers,
  selectedOfferId: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      state.currentCity = action.payload;
    });
  builder
    .addCase(selectOffer,(state,action) =>{
      state.selectedOfferId = action.payload;
    });
});

export {reducer};

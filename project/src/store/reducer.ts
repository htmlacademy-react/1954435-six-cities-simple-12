import {createReducer} from '@reduxjs/toolkit';
import {changeCity,selectOffer} from './actions';
import { CITIES } from '../const';
import { Offers } from '../types/offer';
import { offers } from '../mocks/offers';

type InitialState = {
  currentCity: string;
  offers: Offers;
  selectedOfferId: number | null;
};

const initialState:InitialState = {
  currentCity: CITIES[0],
  offers: offers,
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

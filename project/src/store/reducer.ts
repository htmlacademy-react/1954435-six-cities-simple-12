import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './actions';
import { offers } from '../mocks/offers';
import { CITIES } from '../const';

const initialState = {
  currentCity: CITIES[0],
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      state.currentCity = action.payload;
    });
});

export {reducer};

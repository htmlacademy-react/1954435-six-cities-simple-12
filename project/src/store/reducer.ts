import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action';


const initialState = {
  currentCity: 'Paris'
  // offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      state.currentCity = action.payload;
    });
});

export {reducer};

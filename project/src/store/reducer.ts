import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './actions';


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

import { combineReducers } from '@reduxjs/toolkit';

import { offerReducer } from './offer-reducer';
import { offersReducer } from './offers-reducer';


export const rootReducer = combineReducers({
  offers: offersReducer,
  offer: offerReducer,
});

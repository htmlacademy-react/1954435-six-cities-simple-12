import { combineReducers } from '@reduxjs/toolkit';

import { offerReducer } from './offer-reducer';
import { offersReducer } from './offers-reducer';
import { userData } from './user-data/user-data';
import { NameSpace } from '../const';


export const rootReducer = combineReducers({
  offers: offersReducer,
  offer: offerReducer,
  [NameSpace.User]: userData.reducer,
});

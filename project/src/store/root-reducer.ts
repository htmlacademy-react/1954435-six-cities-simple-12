import { combineReducers } from '@reduxjs/toolkit';

import { offerReducer } from './offer-reducer';
import { offersData } from './offers/offers';
import { userData } from './user/user';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  offer: offerReducer,
  [NameSpace.User]: userData.reducer,
});

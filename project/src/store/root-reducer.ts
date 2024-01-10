import { combineReducers } from '@reduxjs/toolkit';

import { offersData } from './offers/offers';
import { offerData } from './offer/offer';
import { userData } from './user/user';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.User]: userData.reducer,
});

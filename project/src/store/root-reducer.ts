import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../const';
import { offersData } from './offers/offers';
import { offerData } from './offer/offer';
import { userData } from './user/user';
import { appData } from './app/app';
import { reviewsData } from './reviews/reviews';
import { nearOffersData } from './near-offers/near-offers';
import { notificationsData } from './notifications/notifications';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.App]: appData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.NearOffers]: nearOffersData.reducer,
  [NameSpace.Notification]: notificationsData.reducer,
});

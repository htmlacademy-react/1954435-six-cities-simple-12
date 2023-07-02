import { configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './offers-reducer';
import { offerReducer } from './offer-reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer:{
    offers:offersReducer,
    offer:offerReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

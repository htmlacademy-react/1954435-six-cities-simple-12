import { createReducer } from '@reduxjs/toolkit';
import {
  //changeCity,
  selectOffer,
  //changeSortType,
  //loadOffers,
  //setOffersLoadingStatus,
} from './offers-actions';
import { /*CITIES,*/ SORTS} from '../const';
//import { Offers } from '../types/offer';

type OffersState = {
  // currentCity: string;
  //offers: Offers;
  selectedOfferId: number | null;
  sortType: string;
  //isOffersDataLoading: boolean;
};

const initialState: OffersState = {
  //currentCity: CITIES[0],
  //offers: [],
  selectedOfferId: null,
  sortType: SORTS[0],
  //isOffersDataLoading: false,
};

export const offersReducer = createReducer(initialState, (builder) => {
  builder
    /*.addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })*/
    .addCase(selectOffer, (state, action) => {
      state.selectedOfferId = action.payload;
    });
  /*.addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    });
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });*/
});



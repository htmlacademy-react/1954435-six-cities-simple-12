import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, CITIES, SORTS } from '../../const';

export type AppState = {
  currentCity: string;
  sortType: string;
  selectedOfferId: number | null;
}

const initialState: AppState = {
  currentCity: CITIES[0],
  sortType: SORTS[0],
  selectedOfferId: null,
};

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<typeof CITIES[0]>) => {
      state.currentCity = action.payload;
    },

    changeSortType: (state, action: PayloadAction<typeof SORTS[0]>) => {
      state.sortType = action.payload;
    },
    selectOffer: (state, action: PayloadAction<number | null>) => {
      state.selectedOfferId = action.payload;
    }
  }
});

export const {changeCity, changeSortType, selectOffer} = appData.actions;


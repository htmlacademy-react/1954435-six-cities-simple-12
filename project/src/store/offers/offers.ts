import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Offer } from '../../types/offer';
import { fetchOffersAction } from '../api-actions';

export type OffersDataState = {
  offers: Offer[];
  status: FetchStatus;
};

const initialState: OffersDataState = {
  offers: [],
  status: FetchStatus.Idle
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.status = FetchStatus.Pending;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = FetchStatus.Successed;
      });

  }
});

import { createSlice, } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Offer } from '../../types/offer';
import { fetchOffersNearByAction } from '../api-actions';

export type NearOffersDataState = {
  offersNearBy: Offer[];
  status: FetchStatus;
};

const initialState: NearOffersDataState = {
  offersNearBy: [],
  status: FetchStatus.Idle
};

export const nearOffersData = createSlice({
  name: NameSpace.NearOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersNearByAction.pending, (state) => {
        state.status = FetchStatus.Pending;
      })
      .addCase(fetchOffersNearByAction.fulfilled, (state, action) => {
        state.offersNearBy = action.payload;
        state.status = FetchStatus.Successed;
      })
      .addCase(fetchOffersNearByAction.rejected, (state) => {
        state.status = FetchStatus.Error;
      });

  }
});



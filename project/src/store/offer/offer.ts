import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Offer } from '../../types/offer';
import { fetchOfferItemAction } from '../api-actions';

export type OfferDataState = {
  offer: Offer | null;
  status: FetchStatus;
};

const initialState: OfferDataState = {
  offer: null,
  status: FetchStatus.Idle,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferItemAction.pending, (state) => {
        state.status = FetchStatus.Pending;
      })
      .addCase(fetchOfferItemAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.status = FetchStatus.Success;
      })
      .addCase(fetchOfferItemAction.rejected, (state) => {
        state.status = FetchStatus.Error;
      });
  },
});

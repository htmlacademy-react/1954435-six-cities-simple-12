import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Review } from '../../types/review';
import { fetchReviewsAction, sendReviewAction } from '../api-actions';

export type ReviewsDataState = {
  reviews: Review[];
  status: FetchStatus;
  postStatus: FetchStatus;
};

const initialState: ReviewsDataState = {
  reviews: [],
  status: FetchStatus.Idle,
  postStatus: FetchStatus.Idle
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.status = FetchStatus.Pending;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = FetchStatus.Success;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.status = FetchStatus.Error;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.postStatus = FetchStatus.Pending;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.postStatus = FetchStatus.Success;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.postStatus = FetchStatus.Error;
      });
  },
});

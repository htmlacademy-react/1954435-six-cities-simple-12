import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { AppDispatch, State } from '../types/state';
import { Offer, OfferId } from '../types/offer';
import { Review } from '../types/review';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user';
import { store } from './';

import {
  loadOffers,
  requireAuthorization,
  setError,
  setOffersLoadingStatus,
} from './offers-actions';
import { loadOfferItem, setOfferItemLoadingStatus, loadReviews, setReviewsLoadingStatus} from './offer-actions';
import { dropToken, saveToken } from '../services/token';

import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';

export const clearErrorAction = createAsyncThunk('data/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(setOffersLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const fetchOfferItemAction = createAsyncThunk<
  void,
  OfferId,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setOfferItemLoadingStatus(true));
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  dispatch(setOfferItemLoadingStatus(false));
  dispatch(loadOfferItem(data));
});


export const fetchReviewsAction = createAsyncThunk<
  void,
  OfferId,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setReviewsLoadingStatus(true));
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
  dispatch(setReviewsLoadingStatus(false));
  dispatch(loadReviews(data));
});


export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Authorized));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuthorized));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Authorized));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuthorized));
});

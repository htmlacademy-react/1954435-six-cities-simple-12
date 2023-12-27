import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '../types/thunk-options';
import { Offer, OfferId } from '../types/offer';
import { Review } from '../types/review';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user';

import {
  loadOffers,
  requireAuthorization,
  setOffersLoadingStatus,
  setLoginLoadingStatus,
  redirectToRoute
} from './offers-actions';
import {
  loadOfferItem,
  setOfferItemLoadingStatus,
  loadReviews,
  setReviewsLoadingStatus,
  loadOffersNearBy,
  setOffersNearByLoadingStatus,
} from './offer-actions';
import { dropToken, saveToken } from '../services/token';

import { APIRoute, AuthorizationStatus, AppRoute } from '../const';


export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  ThunkOptions
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(setOffersLoadingStatus(false));
  dispatch(loadOffers(data));
});

export const fetchOfferItemAction = createAsyncThunk<
  void,
  OfferId,
  ThunkOptions
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setOfferItemLoadingStatus(true));
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  dispatch(setOfferItemLoadingStatus(false));
  dispatch(loadOfferItem(data));
});

export const fetchReviewsAction = createAsyncThunk<
  void,
  OfferId,
  ThunkOptions
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setReviewsLoadingStatus(true));
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
  dispatch(setReviewsLoadingStatus(false));
  dispatch(loadReviews(data));
});

export const fetchOffersNearByAction = createAsyncThunk<
  void,
  OfferId,
  ThunkOptions
>('data, fetchOffersNearBy', async (id, { dispatch, extra: api }) => {
  dispatch(setOffersNearByLoadingStatus(true));
  const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);
  dispatch(loadOffersNearBy(data));
  dispatch(setOffersNearByLoadingStatus(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  ThunkOptions
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
  ThunkOptions
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    dispatch(setLoginLoadingStatus(true));
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Authorized));
    dispatch(setLoginLoadingStatus(false));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  ThunkOptions
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuthorized));
});

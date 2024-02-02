import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from '../types/thunk-options';
import { Offer, OfferId } from '../types/offer';
import { Review } from '../types/review';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user';
import { ReviewData } from '../types/review';

import { dropToken, saveToken } from '../services/token';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { pushNotification } from './notifications/notifications';
import axios from 'axios';

export const fetchOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  ThunkOptions
>('data/fetchOffers', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<Offer[]>(APIRoute.Offers);

    return data;
  } catch {
    throw new Error();
  }
});

export const fetchOfferItemAction = createAsyncThunk<
  Offer,
  OfferId,
  ThunkOptions
>('data/fetchOffer', async (id, {dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);

    return data;
  } catch (err) {
    if(axios.isAxiosError(err) && err.response?.status === 404 ){
      dispatch(redirectToRoute(AppRoute.NotFound));
    } else {
      dispatch(pushNotification({ type: 'error', message: 'Failed to load offer data' }));
    }
    throw err;
  }
});

export const fetchReviewsAction = createAsyncThunk<
  Review[],
  OfferId,
  ThunkOptions
>('data/fetchReviews', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);

    return data;
  } catch (err) {
    dispatch(pushNotification({ type: 'error', message: 'Failed to load reviews' }));
    throw err;
  }
});

export const sendReviewAction = createAsyncThunk<Review[], ReviewData, ThunkOptions>(
  'data/sendReview',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<Review[]>(`${APIRoute.Reviews}/${id}`, { comment, rating });

      return data;
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Failed to post comment' }));
      throw err;
    }
  }
);

export const fetchOffersNearByAction = createAsyncThunk<
  Offer[],
  OfferId,
  ThunkOptions
>('data/fetchOffersNearBy', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Offer[]>(`${APIRoute.Offers}/${id}/nearby`);

    return data;
  } catch (err) {
    dispatch(pushNotification({ type: 'error', message: 'Failed to load near offers data' }));
    throw err;
  }
});

export const checkAuthAction = createAsyncThunk<
  UserData | void,
  undefined,
  ThunkOptions
>('user/checkAuth', async (_arg, { extra: api }) => {
  try {
    const { data } = await api.get<UserData>(APIRoute.Login);

    return data;
  } catch {
    throw new Error();
  }
});

export const loginAction = createAsyncThunk<
  UserData | void,
  AuthData,
  ThunkOptions
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, {
        email,
        password,
      });
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      dispatch(pushNotification({ type: 'success', message: 'Login success' }));
      return data;
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Login failed' }));
      throw err;
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch (err) {
      dispatch(pushNotification({ type: 'error', message: 'Logout failed' }));
      throw err;
    }
  }
);

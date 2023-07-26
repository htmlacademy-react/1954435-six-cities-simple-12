import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction(
  'city/changeCity',
  (value: string) => ({ payload: value, }));

export const selectOffer = createAction(
  'offers/selectOffer',
  (id: number | null) => ({ payload: id, }));

export const changeSortType = createAction(
  'offers/changeSortType',
  (value: string) => ({ payload: value, }));

export const setOffersLoadingStatus = createAction(
  'data/setLoadingStatus',
  (isLoading: boolean) => ({ payload: isLoading }));

export const loadOffers = createAction(
  'data/loadOffers',
  (offers: Offer[]) => ({ payload: offers, }));

//export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (status: AuthorizationStatus) => ({ payload: status }));

export const setLoginLoadingStatus = createAction(
  'data/setLoginLoadingStatus',
  (isLoading: boolean) => ({ payload: isLoading }));

export const setError = createAction(
  'data/checkError',
  (error: string | null) => ({ payload: error }));



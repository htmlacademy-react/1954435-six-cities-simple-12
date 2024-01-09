import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { UserData } from '../types/user';
import { /*AuthorizationStatus,*/ AppRoute } from '../const';

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

export const setLoginLoadingStatus = createAction(
  'data/setLoginLoadingStatus',
  (isLoading: boolean) => ({ payload: isLoading }));


export const redirectToRoute = createAction(
  'app/redirectToRoute',
  (route: AppRoute) => ({payload: route}));

export const loadUserData = createAction(
  'user/loadUserData',
  (userData: UserData) => ({payload: userData})
);

import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('offers/changeCity',
  (value: string) => ({
    payload: value,
  }));

export const selectOffer = createAction('offers/selectOffer',
  (id: number | null) => ({
    payload: id})
);

export const sortOffer = createAction('offers/sortOffer',
  (value: string) => ({
    payload: value,
  }));



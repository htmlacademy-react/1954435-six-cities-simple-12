import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction(
  'offers/changeCity',
  (value: string) => ({
    payload: value,
  })
);

export const selectOffer = createAction(
  'offers/selectOffer',
  (id: number | null) => ({
    payload: id,
  })
);

export const changeSortType = createAction(
  'offers/changeSortType',
  (value: string) => ({
    payload: value,
  })
);

import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('offers/changeCity',
  (value: string) => ({
    payload: value,
  }));



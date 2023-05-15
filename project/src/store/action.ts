import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('offers/changeCity',
  (value: string)=>({
    payload: value,
  }));

//export const changeCity = createAction('change-city');
//export const fillOfferList = createAction('fill-offer-list');

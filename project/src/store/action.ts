import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<{city: string}>('offers/changeCity');
//export const changeCity = createAction('change-city');
//export const fillOfferList = createAction('fill-offer-list');

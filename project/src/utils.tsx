import { offers } from './mocks/offers';

export const getOffersByCity = (city: string) =>
  offers.filter((offer) => (offer.city.name === city));

import { Offer } from './types/offer';

export const getOffersByCity = (offers:Offer[], city: string) =>
  offers.filter((offer) => (offer.city.name === city));



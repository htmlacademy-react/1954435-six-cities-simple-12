import { offers } from './mocks/offers';

export const getOffersByCity = (city: string) =>
  offers.filter((offer) => (offer.city.name === city));


/*markers.forEach((marker) => {
  map.removeLayer(marker);});*/
/*
  return () => {
    markerGroup.clearLayers();
  };*/

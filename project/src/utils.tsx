import { Offer } from './types/offer';

export const getOffersByCity = (offers:Offer[], city: string) =>
  offers.filter((offer) => (offer.city.name === city));

function getSortOffers(a:number, b:number) {
  return (a - b);
}

export const getOffersBySortType = (filteredOffers:Offer[], sortType: string) =>{
  const sortebleOffers = [...filteredOffers];

  if (sortType === 'Price: low to high') {
    sortebleOffers.sort((a, b) => getSortOffers(a.price, b.price));
  } else if (sortType === 'Price: high to low') {
    sortebleOffers.sort((a, b) => getSortOffers(b.price, a.price));
  } else if (sortType === 'Top rated first') {
    sortebleOffers.sort((a, b) => getSortOffers(b.rating, a.rating));
  }

  return sortebleOffers;
};

import { Offer } from '../types/offer';
import { Review } from '../types/review';

export const getOffersByCity = (offers: Offer[], city: string) =>
  offers.filter((offer) => offer.city.name === city);

function getSortOffers(a: number, b: number) {
  return a - b;
}
/* Переделать дженериками на динамическое подставление ключей*/
export const getOffersBySortType = (
  filteredOffers: Offer[],
  sortType: string
) => {
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

export const formatFirstLetter = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const getSortedReviews = (reviews: Review[]): Review[] =>
  [...reviews].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

/*Функция округления кол-ва звёзд  */
export const calculateRatingToPercent = (
  rating: number,
  maxRating = 5
): number => Math.round(rating) * (100 / maxRating);

//test


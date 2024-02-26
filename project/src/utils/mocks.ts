import { datatype, internet, address, commerce, image, lorem, date } from 'faker';
import { User, UserData} from '../types/user';
import { Location, City, Offer } from '../types/offer';
import { Review } from '../types/review';
import { Notification } from '../types/notification';

export const makeFakeUser = (): User => ({
  id: datatype.number(),
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar()
});

export const makeFakeUserData = (): UserData => ({
  id: datatype.number(),
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
  email: internet.email(),
  token: datatype.string()
});

export const makeFakeLocation = (): Location => ({
  zoom: datatype.number({min: 5, max: 15}),
  latitude: datatype.number({min: 52, max: 53, precision: 0.0001}),
  longitude: datatype.number({min: 4, max: 5, precision: 0.0001})
});

export const makeFakeCity = (): City => ({
  name: address.cityName(),
  location: makeFakeLocation()
});

export const makeFakeOffer = (): Offer => ({
  id: datatype.number({ max: 8 }),
  isPremium: datatype.boolean(),
  title: commerce.productName(),
  type: commerce.product(),
  price: datatype.number({ min: 100, max: 1000 }),
  rating: datatype.number({min: 1, max: 5, precision: 0.1}),
  previewImage: image.imageUrl(),
  images: Array.from({length: 2}, () => image.imageUrl(260, 200, 'cat', true)),
  bedrooms: datatype.number({min: 1, max: 10}),
  maxAdults: datatype.number({min: 1, max: 5}),
  goods: [commerce.product()],
  description: commerce.productDescription(),
  host: makeFakeUser(),
  city: makeFakeCity(),
  location: makeFakeLocation()
});

export const makeFakeOffers = (): Offer[] =>
  Array.from({length: 6}, makeFakeOffer);

export const makeFakeNearOffers = (): Offer[] =>
  Array.from({length: 3}, makeFakeOffer);

export const makeFakeReview = (): Review => ({
  id: datatype.number(),
  user: makeFakeUser(),
  rating: datatype.number({min: 1, max: 5, precision: 0.1}),
  comment: lorem.sentence(),
  date: String(date.recent())
});

export const makeFakeReviews = (): Review[] =>
  Array.from({length: 5}, makeFakeReview);

export const makeFakeNotification = (): Notification => ({
  id: datatype.uuid(),
  type: 'error',
  message: lorem.text(),
  duration: datatype.number({ min: 1000, max: 4000 })
});

import {Offers} from '../types/offer';
import {PHOTO_URL} from './const-mocks';


export const offers: Offers = [
  {
    id: 1,
    isPremium: true,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 120,
    rating: 4.8,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 6}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Heating', 'Kitchen' , 'Fridge', 'Towels'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    host: {
      id: 5,
      name: 'Angelina',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.370216,
        longitude: 4.895168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.3909553943508,
      longitude:  4.85309666406198
    }
  },
  {
    id: 2,
    isPremium: false,
    title: 'Wood and stone place',
    type: 'Private Room',
    price: 80,
    rating: 4,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 6}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 2,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Heating', 'Kitchen' , 'Fridge', 'Towels'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 4,
      name: 'Ole',
      isPro: false,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.380216,
        longitude: 4.905168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.3609553943508,
      longitude:  4.85309666406198
    }
  },
  {
    id: 3,
    isPremium: false,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 3,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 6}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Towels', 'Coffee machine', 'Washing machine' ],
    description: 'An independent House, strategically located between Rembrand Square and National Opera.',
    host: {
      id: 3,
      name: 'Bill',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.310216,
        longitude: 4.955168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.3909553943508,
      longitude:  4.929309666406198
    }
  },
  {
    id: 4,
    isPremium: true,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 6}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 5,
    maxAdults: 3,
    goods: ['Towels', 'Kitchen'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    host: {
      id: 2,
      name: 'Max',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 51.310216,
        longitude: 5.955168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.3809553943508,
      longitude: 4.939309666406198
    }
  }
];

export const nearOffers = offers.slice(0, 3);

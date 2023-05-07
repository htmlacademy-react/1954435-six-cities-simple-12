import {User} from './user';

export type Location = {
  zoom: number;
  latitude: number;
  longitude: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: number;
  isPremium: boolean;
  title: string;
  type: string;
  price: number;
  rating: number;
  previewImage: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  description: string;
  host: User;
  city: City;
  location: Location;
};

export type Offers = Offer[];



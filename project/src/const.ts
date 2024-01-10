export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Authorized = 'AUTHORIZED',
  NoAuthorized = 'NO_AUTHORIZED',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SORTS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const PHOTOS_GALLERY = 6;

export const REGEXP_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGEXP_PASS = /([0-9].*[a-z])|([a-z].*[0-9])/;

export enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  User = 'USER',
  App = 'APP'
}

export const enum FetchStatus {
	Idle = 'Idle',
	Pending = 'Pending',
	Successed = 'Successed',
	Failed = 'Failed',
}


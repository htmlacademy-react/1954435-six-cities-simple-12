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

//export const TIMEOUT_SHOW_ERROR = 2000;

//export const REGEXP_PASS = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//export const REGEXP_EMAIL = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;

export const PHOTOS_GALLERY = 6;

export const REGEXP_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGEXP_PASS = /([0-9].*[a-z])|([a-z].*[0-9])/;


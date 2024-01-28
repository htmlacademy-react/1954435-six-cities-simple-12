import { datatype, internet, } from 'faker';
import { User, UserData } from '../types/user';

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


import { NameSpace, AuthorizationStatus, FetchStatus } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getUserData = (state: State): UserData | null =>
  state[NameSpace.User].userData;

export const getLoginLoadingStatus = (state: State): FetchStatus =>
  state[NameSpace.User].isLoginLoadingStatus;


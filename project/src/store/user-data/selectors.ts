import { createSelector } from 'reselect';
import { NameSpace, AuthorizationStatus, FetchStatus } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const getUserData = (state: State): UserData | null =>
  state[NameSpace.User].userData;

export const getLoginLoadingStatus = (state: State): FetchStatus =>
  state[NameSpace.User].isLoginLoadingStatus;

export const getLoginStatus = createSelector([ getLoginLoadingStatus], (status) => ({
  isPending: status === FetchStatus.Pending
}));
/*const isLoginLoadingStatus = useAppSelector(getLoginLoadingStatus);
{ isLoginLoadingStatus === FetchStatus.Pending; }*/

export const getAuthStatus = createSelector([getAuthorizationStatus], (status) => ({
  isAuthorized: status === AuthorizationStatus.Authorized,
}));


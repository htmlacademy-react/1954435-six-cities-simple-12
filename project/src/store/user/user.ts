import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus, FetchStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { UserData } from '../../types/user';

export type UserDataState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  status: FetchStatus;
};

const initialState: UserDataState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  status: FetchStatus.Idle,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Authorized;
        state.userData = action.payload ?? null;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorized;
        state.userData = null;
      })
      .addCase(loginAction.pending, (state) => {
        state.status = FetchStatus.Pending;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Authorized;
        state.userData = action.payload ?? null;
        state.status = FetchStatus.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorized;
        state.userData = null;
        state.status = FetchStatus.Error;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuthorized;
      });
  }
});

import { userData, UserDataState} from './user';
import { AuthorizationStatus, FetchStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { makeFakeUserData } from '../../utils/mocks';

const fakeUserData = makeFakeUserData();
describe('Reducer: userData', () => {
  let state: UserDataState;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
      status: FetchStatus.Idle
    };
  });
  it('Should return initial state without additional parameters', () => {
    expect(userData.reducer(undefined,/*void 0,*/ { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });
  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTHORIZED" and return "userData" if checkAuthAction fulfilled', () => {
      expect(userData.reducer(state, {type: checkAuthAction.fulfilled.type, payload: fakeUserData}))
        .toEqual({ ...state, authorizationStatus: AuthorizationStatus.Authorized, userData: fakeUserData,});
    });
    it('should update authorizationStatus to "NoAuthorized" if checkAuthAction rejected', () => {
      expect(userData.reducer(state, {type: checkAuthAction.rejected.type}))
        .toEqual({ ...state, authorizationStatus: AuthorizationStatus.NoAuthorized, userData: null});
    });
  });

  describe('loginAction test', () => {
    it('should update status to "PENDING" if loginAction pending', () => {
      expect(userData.reducer(state, {type: loginAction.pending.type}))
        .toEqual({...state, status: FetchStatus.Pending});
    });

    it('should update authorizationStatus to "AUTHORIZED" and return "userData" if loginAction fulfilled', () => {
      expect(userData.reducer(state, {type: loginAction.fulfilled.type, payload: fakeUserData}))
        .toEqual({authorizationStatus: AuthorizationStatus.Authorized, userData: fakeUserData, status: FetchStatus.Success});
    });
    it('should update authorizationStatus to "NO_AUTHORIZED" if loginAction rejected', () => {
      expect(userData.reducer(state, {type: loginAction.rejected.type}))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuthorized, status: FetchStatus.Error});
    });
  });
  describe('logoutAction', () => {
    it('should update authorizationStatus to "NO_AUTHORIZED" if logoutAction fulfilled', () => {
      expect(userData.reducer(state, {type: logoutAction.fulfilled.type}))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuthorized});
    });
  });
});


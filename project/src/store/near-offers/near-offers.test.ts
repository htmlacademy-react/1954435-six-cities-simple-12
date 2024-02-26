import { FetchStatus } from '../../const';
import { fetchOffersNearByAction } from '../api-actions';
import { NearOffersDataState, nearOffersData } from './near-offers';
import { makeFakeNearOffers } from '../../utils/mocks';

const nearOffers = makeFakeNearOffers();

describe('Reducer: nearOffersData', () => {
  let state: NearOffersDataState;

  beforeEach(() => {
    state = {
      offersNearBy: [],
      status: FetchStatus.Idle
    };
  });
  it('Should return initial state without additional parameters', () => {
    expect(nearOffersData.reducer(undefined,{ type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('fetchOffersAction test', () => {
    it('should update status to "PENDING" if fetchOfferItemAction pending', () => {
      expect(nearOffersData.reducer(state, {type: fetchOffersNearByAction.pending.type}))
        .toEqual({...state, status: FetchStatus.Pending});
    });

    it('Should load nearOffers and update status to "SUCCESS" if fetchOfferItemAction fulfilled', () => {
      expect(nearOffersData.reducer(state, {type: fetchOffersNearByAction.fulfilled.type, payload: nearOffers}))
        .toEqual({ offersNearBy:nearOffers, status: FetchStatus.Success});
    });

    it('Should update status to "ERROR" is fetchOfferItemAction rejected', () => {
      expect(nearOffersData.reducer(state, {type: fetchOffersNearByAction.rejected.type}))
        .toEqual({...state, status: FetchStatus.Error});
    });
  });
});


import { FetchStatus } from '../../const';
import { fetchOffersAction } from '../api-actions';
import { OffersDataState, offersData } from './offers';
import { makeFakeOffers } from '../../utils/mocks';

const offers = makeFakeOffers();

describe('Reducer: offersData', () => {
  let state: OffersDataState;

  beforeEach(() => {
    state = {
      offers: [],
      status: FetchStatus.Idle
    };
  });
  it('Should return initial state without additional parameters', () => {
    expect(offersData.reducer(undefined,{ type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('fetchOffersAction test', () => {
    it('should update status to "PENDING" if fetchOffersAction pending', () => {
      expect(offersData.reducer(state, {type: fetchOffersAction.pending.type}))
        .toEqual({...state, status: FetchStatus.Pending});
    });

    it('Should load offers and update status to "SUCCESS" if fetchOffersAction fulfilled', () => {
      expect(offersData.reducer(state, {type: fetchOffersAction.fulfilled.type, payload: offers}))
        .toEqual({ offers, status: FetchStatus.Success});
    });

    it('Should load offers and update status to "ERROR" is fetchOffersAction rejected', () => {
      expect(offersData.reducer(state, {type: fetchOffersAction.rejected.type}))
        .toEqual({...state, status: FetchStatus.Error});
    });
  });
});



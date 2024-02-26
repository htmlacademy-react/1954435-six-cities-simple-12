import { FetchStatus } from '../../const';
import { fetchOfferItemAction } from '../api-actions';
import { OfferDataState, offerData } from './offer';
import { makeFakeOffer } from '../../utils/mocks';

const offer = makeFakeOffer();

describe('Reducer: offerData', () => {
  let state: OfferDataState;

  beforeEach(() => {
    state = {
      offer: null,
      status: FetchStatus.Idle
    };
  });
  it('Should return initial state without additional parameters', () => {
    expect(offerData.reducer(undefined,{ type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  describe('fetchOffersAction test', () => {
    it('should update status to "PENDING" if fetchOfferItemAction pending', () => {
      expect(offerData.reducer(state, {type: fetchOfferItemAction.pending.type}))
        .toEqual({...state, status: FetchStatus.Pending});
    });

    it('Should load offer and update status to "SUCCESS" if fetchOfferItemAction fulfilled', () => {
      expect(offerData.reducer(state, {type: fetchOfferItemAction.fulfilled.type, payload: offer}))
        .toEqual({ offer, status: FetchStatus.Success});
    });

    it('Should load offers and update status to "ERROR" is fetchOfferItemAction rejected', () => {
      expect(offerData.reducer(state, {type: fetchOfferItemAction.rejected.type}))
        .toEqual({...state, status: FetchStatus.Error});
    });
  });
});

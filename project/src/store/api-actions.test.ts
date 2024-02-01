import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { checkAuthAction, loginAction, logoutAction, fetchOffersAction,
  fetchOfferItemAction, fetchOffersNearByAction, fetchReviewsAction, sendReviewAction } from './api-actions';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { redirectToRoute } from './action';
import { pushNotification } from './notifications/notifications';
import { makeFakeOffers, makeFakeOffer, makeFakeNearOffers, makeFakeReviews, makeFakeReview } from '../utils/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «Authorized» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      pushNotification.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch Load_Offers when GET /offers', async () => {
    const offers = makeFakeOffers();
    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, offers);

    const store = mockStore();

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Offer when GET /offers', async () => {
    const offer = makeFakeOffer();
    mockAPI
      .onGet(`${APIRoute.Offers}/${offer.id}`)
      .reply(200, offer);

    const store = mockStore();

    await store.dispatch(fetchOfferItemAction(offer.id));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOfferItemAction.pending.type,
      fetchOfferItemAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Near_Offers when GET /offers', async () => {
    const nearOffers = makeFakeNearOffers();
    const offer = makeFakeOffer();
    mockAPI
      .onGet(`${APIRoute.Offers}/${offer.id}/nearby`)
      .reply(200, nearOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersNearByAction(offer.id));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOffersNearByAction.pending.type,
      fetchOffersNearByAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Reviews when GET /reviews', async () => {
    const reviews = makeFakeReviews();
    const offer = makeFakeOffer();
    mockAPI
      .onGet(`${APIRoute.Reviews}/${offer.id}`)
      .reply(200, reviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(offer.id));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch Send_Revies when POST /comments', async () => {
    const reviews = makeFakeReviews();
    const newReview = makeFakeReview();

    mockAPI
      .onPost(`${APIRoute.Reviews}/${newReview.id}`)
      .reply(200, reviews);

    const store = mockStore();

    await store.dispatch(sendReviewAction(newReview));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      sendReviewAction.pending.type,
      sendReviewAction.fulfilled.type
    ]);
  });
});

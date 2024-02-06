import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import App from './app';
import { AuthorizationStatus, AppRoute, NameSpace, FetchStatus, CITIES, SORTS } from '../../const';
import { makeFakeReviews, makeFakeOffers, makeFakeUserData, makeFakeNearOffers } from '../../utils/mocks';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';

const userData = makeFakeUserData();
const reviews = makeFakeReviews() ;
const offers = makeFakeOffers();
const nearOffers = makeFakeNearOffers();

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const history = createMemoryHistory();

const mockStore = configureMockStore<
  State,
  Action<string>,
  ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  [NameSpace.App]: {
    currentCity: CITIES[0],
    sortType: SORTS[0],
  },
  [NameSpace.Reviews]: {
    reviews: reviews,
    status: FetchStatus.Success,
    postStatus: FetchStatus.Success
  },
  [NameSpace.NearOffers]: {
    offersNearBy: nearOffers,
    status: FetchStatus.Success
  },
  [NameSpace.Offer]: {
    offer: offers[0],
    status: FetchStatus.Success
  },
  [NameSpace.Offers]: {
    offers: offers,
    status: FetchStatus.Success
  },
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Authorized,
    userData: userData,
    status: FetchStatus.Success
  }
});

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  });
});



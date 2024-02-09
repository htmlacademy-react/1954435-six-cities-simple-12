import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AnyAction} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import HeaderSignOut from './header-sign-out';
import {State} from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../const';

const fakeState = {
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Authorized,
  },
};

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<State, AnyAction>(middlewares);

const history = createMemoryHistory();

describe('Component: HeaderSignOut', () => {
  it('should render correctly', () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <HeaderSignOut />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByTestId('header-sign-out')).toBeInTheDocument();
  });

  it('should despatch action "logoutAction" if user click to the "Sign out" link', async () => {
    const store = mockStore(fakeState);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <HeaderSignOut />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    const linkElement = screen.getByText(/Sign out/i);
    await userEvent.click(linkElement);

    const actions = store.getActions();
    const logout = actions.find((action) => action.type === 'user/logout/pending');
    expect(logout?.type).toBe('user/logout/pending');

  });
});

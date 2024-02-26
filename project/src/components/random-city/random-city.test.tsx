import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import userEvent from '@testing-library/user-event';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../../components/history-route/history-route';
import RandomCity from './random-city';
import {AppRoute, AuthorizationStatus, FetchStatus, NameSpace} from '../../const';
import LoginScreen from '../../pages/login-screen/login-screen';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
    status: FetchStatus.Idle
  }
});
const history = createMemoryHistory();
history.push(AppRoute.Login);


describe('Component: RandomCity', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <RandomCity/>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('random-city')).toBeInTheDocument();
  });

  it('should redirect when user click "random-city"', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Routes>
              <Route
                path={AppRoute.Login}
                element={<LoginScreen />}
              />
              <Route
                path={AppRoute.Main}
                element={<title>Six cities</title>}
              />
            </Routes>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.click(screen.getByTestId('redirect-main'));

    expect(screen.getByText('Six cities')).toBeInTheDocument();
  });
});

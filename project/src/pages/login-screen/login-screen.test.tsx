import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { HelmetProvider } from 'react-helmet-async';
import { AuthorizationStatus, NameSpace, AppRoute } from '../../const';
import LoginScreen from './login-screen';


const mockStore = configureMockStore();

describe('Component: LoginScreen', () => {
  it('should render correctly "LoginScreen" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.Login);
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuthorized,
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <LoginScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('login-screen')).toBeInTheDocument();
  });
});

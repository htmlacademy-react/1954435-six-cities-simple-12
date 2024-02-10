import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { HelmetProvider } from 'react-helmet-async';
import thunk from 'redux-thunk';
import MainScreen from './main-screen';
import { AuthorizationStatus, NameSpace, FetchStatus, CITIES } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';

const mockStore = configureMockStore([thunk]);
const offers = makeFakeOffers();

describe('Component: MainScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.Offers]: {
        offers: offers,
        status: FetchStatus.Success
      },
      [NameSpace.App]: {
        currentCity: CITIES[0],
      },
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Authorized
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <MainScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByTestId('main-screen')).toBeInTheDocument();
  });
});

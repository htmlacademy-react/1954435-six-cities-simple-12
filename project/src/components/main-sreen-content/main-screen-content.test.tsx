import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import MainScreenContent from './main-screen-content';
import { CITIES, SORTS, NameSpace, FetchStatus } from '../../const';
import { makeFakeOffers } from '../../utils/mocks';

const mockStore = configureMockStore();
const offers = makeFakeOffers();

describe('Component: MainScreenContent', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.App]: {
        currentCity: CITIES[0],
        sortType: SORTS[0],
      },
      [NameSpace.Offers]: {
        offers: offers,
        status: FetchStatus.Success
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainScreenContent />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('main-screen-content')).toBeInTheDocument();
  });
});

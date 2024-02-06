import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import CityList from './city-list';
import { CITIES } from '../../const';

const mockStore = configureMockStore();

describe('Component: CityList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const currentCity = CITIES[0];

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <CityList currentCity={currentCity} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('city-list')).toBeInTheDocument();
  });
});

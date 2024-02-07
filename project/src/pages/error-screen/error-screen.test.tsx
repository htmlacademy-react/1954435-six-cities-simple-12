import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import ErrorScreen from './error-screen';
import HistoryRouter from '../../components/history-route/history-route';

const mockStore = configureMockStore();

describe('Component: ErrorScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ErrorScreen />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Failed to load data/i)).toBeInTheDocument();
    expect(screen.getByText(/Try again/i)).toBeInTheDocument();
  });
});

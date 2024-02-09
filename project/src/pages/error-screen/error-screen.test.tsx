import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import ErrorScreen from './error-screen';
import HistoryRouter from '../../components/history-route/history-route';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
    expect(screen.getByRole('button').textContent).toBe('Try again');
  });

  it('should fetch offers if the button is clicked', async () => {
    const store = mockStore({});
    render(
      <Provider store={store}>
        <ErrorScreen />
      </Provider>
    );

    await userEvent.click(screen.getByRole('button'));

    const actions = store.getActions();

    expect(actions[0].type).toBe('data/fetchOffers/pending');
  });
});

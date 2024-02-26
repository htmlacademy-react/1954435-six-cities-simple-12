import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import Badge from './badge';

const mockStore = configureMockStore();

describe('Component: Badge', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Badge className="test" text="test" />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });
});

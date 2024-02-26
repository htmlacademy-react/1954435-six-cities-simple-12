import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import Sorting from './sorting';
import { SORTS, NameSpace } from '../../const';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.App]: {
    sortType: SORTS[0],
  }
});
const history = createMemoryHistory();

describe('Component: Sorting', () => {
  it('should render correctly', () => {


    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sorting currentSortType={SORTS[0]} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByTestId('sort')).toBeInTheDocument();
  });

  it('should dispatch action "changeSortType" if user click to sort item', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sorting currentSortType={SORTS[0]} />
        </HistoryRouter>
      </Provider>
    );

    const sortItemElements = screen.getAllByTestId('sort-item');
    await userEvent.click(sortItemElements[0]);

    const actions = store.getActions();
    expect(actions[0].type).toBe('APP/changeSortType');
  });
});

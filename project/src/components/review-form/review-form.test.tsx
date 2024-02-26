import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewForm from './review-form';
import { NameSpace, FetchStatus } from '../../const';

const mockStore = configureMockStore();

describe('Component: ReviewForm', () => {
  it('should render correctl', async () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.Reviews]: {
        reviews: [],
        status: FetchStatus.Idle,
        postStatus: FetchStatus.Idle
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell how was/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('review'), 'It is a new review.');
    expect(screen.getByDisplayValue(/It is a new review./i)).toBeInTheDocument();
  });
});

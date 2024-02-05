import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { makeFakeReviews } from '../../utils/mocks';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewList from './review-list';

const mockStore = configureMockStore();

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const reviews = makeFakeReviews();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <ReviewList reviews={reviews} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('reviews-list')).toBeInTheDocument();
  });
});

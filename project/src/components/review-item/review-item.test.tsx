import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { makeFakeReview } from '../../utils/mocks';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewItem from './review-item';

const mockStore = configureMockStore();

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const review = makeFakeReview();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <ReviewItem review={review} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-item')).toBeInTheDocument();
    expect(screen.getByText(review.user.name)).toBeInTheDocument();
    expect(screen.getByText(review.user.avatarUrl)).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { makeFakeOffer } from '../../utils/mocks';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import Gallery from './gallery';

const mockStore = configureMockStore();

describe('Component: Gallery', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const offer = makeFakeOffer();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Gallery images={offer.images} alt={offer.title} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('gallery-list')).toBeInTheDocument();
  });
});

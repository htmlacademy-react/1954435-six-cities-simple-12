import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { makeFakeOffers } from '../../utils/mocks';
import { NameSpace, FetchStatus } from '../../const';
import OfferList from './offer-list';

const mockStore = configureMockStore();
const offers = makeFakeOffers();
const onCardHover = jest.fn();

describe('Component: OfferList', () => {
  it('should render correctly', () => {
    const expectedCardsCount = offers.length;
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.Offer]: {
        offer: offers,
        status: FetchStatus.Success
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <OfferList className="cities__card" offers={offers} onCardHover={onCardHover} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getAllByTestId('room-card').length).toBe(expectedCardsCount);
  });
});

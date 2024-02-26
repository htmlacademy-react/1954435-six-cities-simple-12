import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import { makeFakeOffer } from '../../utils/mocks';
import RoomCard from './room-card';
import { AuthorizationStatus, NameSpace, FetchStatus } from '../../const';

const mockStore = configureMockStore();
const offer = makeFakeOffer();
const onCardHover = jest.fn();

describe('Component: RoomCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuthorized
      },
      [NameSpace.Offer]: {
        offer: offer,
        status: FetchStatus.Success
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <RoomCard key={offer.id} offer={offer} className="cities__card" onCardHover={onCardHover} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('room-card')).toBeInTheDocument();
    expect(screen.getByText(offer.title)).toBeInTheDocument();
  });

  it('should event hover correctly if user hover on the card', async () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuthorized
      },
      [NameSpace.Offer]: {
        offer: offer,
        status: FetchStatus.Success
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <RoomCard key={offer.id} offer={offer} className="cities__card" onCardHover={onCardHover} />
        </HistoryRouter>
      </Provider>
    );

    await userEvent.hover(screen.getByTestId('room-card'));
    expect(onCardHover).toBeCalled();
  });
});

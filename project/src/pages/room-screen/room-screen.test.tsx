import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { HelmetProvider } from 'react-helmet-async';
import thunk from 'redux-thunk';
import { AuthorizationStatus, NameSpace, FetchStatus } from '../../const';
import { makeFakeReviews, makeFakeOffers, makeFakeOffer, makeFakeNearOffers } from '../../utils/mocks';
import RoomScreen from './room-screen';

const mockStore = configureMockStore([thunk]);
const offer = makeFakeOffer();
const offers = makeFakeOffers;
const reviews = makeFakeReviews();
const nearOffers = makeFakeNearOffers();

describe('Component: RoomScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.Offers]: {
        offers: offers,
        status: FetchStatus.Success
      },
      [NameSpace.Offer]: {
        offer: offer,
        status: FetchStatus.Success
      },
      [NameSpace.NearOffers]: {
        offersNearBy: nearOffers,
        status: FetchStatus.Success
      },
      [NameSpace.Reviews]: {
        reviews: reviews,
        fetchStatus: FetchStatus.Success
      },
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Authorized
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <RoomScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByTestId('room-screen')).toBeInTheDocument();
  });
});

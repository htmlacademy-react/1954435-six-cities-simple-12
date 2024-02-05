import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { makeFakeOffer } from '../../utils/mocks';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import RoomInside from './room-inside';

const mockStore = configureMockStore();

describe('Component:  RoomInside', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const offer = makeFakeOffer();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <RoomInside goods={offer.goods} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('inside-list')).toBeInTheDocument();
  });
});

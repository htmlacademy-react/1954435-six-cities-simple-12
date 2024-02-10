import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { makeFakeOffer } from '../../utils/mocks';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import RoomHeader from './room-header';

const mockStore = configureMockStore();
describe('Component: RoomHeader', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const offer = makeFakeOffer();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <RoomHeader offer={offer} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/adults/i)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });
});

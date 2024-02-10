import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { makeFakeOffer } from '../../utils/mocks';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import Host from './host';

const mockStore = configureMockStore();
describe('Component: Host', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const offer = makeFakeOffer();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Host host={offer.host} description={offer.description} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('host')).toBeInTheDocument();
  });
});

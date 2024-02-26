import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Map from './map';
import { makeFakeOffers } from '../../utils/mocks';

const mockStore = configureMockStore();
const offers = makeFakeOffers();


describe('Component: Map', () => {
  it('should render correctly', () => {

    render(
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <Map className="test" offers={offers} activePointId={offers[0].id} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});

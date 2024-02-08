import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import CityList from './city-list';
import { CITIES, NameSpace } from '../../const';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.App]: {
    currentCity: CITIES[0],
  }
});
describe('Component: CityList', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CityList currentCity={CITIES[0]} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('city-list')).toBeInTheDocument();
  });
  it('should dispatch action "changeCity" if user click to city item', async () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CityList currentCity={CITIES[0]} />
        </MemoryRouter>
      </Provider>
    );

    const sortItemElements = screen.getAllByTestId('city-item');
    await userEvent.click(sortItemElements[0]);

    const actions = store.getActions();
    expect(actions[0].type).toBe('APP/changeCity');
  });
});

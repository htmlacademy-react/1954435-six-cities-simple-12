import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HeaderNav from './header-nav';
import { AuthorizationStatus, NameSpace } from '../../const';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Authorized,
  }
});

describe('Component: HeaderNav', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderNav />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});

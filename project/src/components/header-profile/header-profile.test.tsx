import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HeaderProfile from './header-profile';
import { AuthorizationStatus, NameSpace } from '../../const';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Authorized,
  }
});

describe('Component: HeaderProfile', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderProfile />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header-profile')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

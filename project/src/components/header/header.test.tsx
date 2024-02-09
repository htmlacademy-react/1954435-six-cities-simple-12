import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';
import { AuthorizationStatus, NameSpace } from '../../const';

const mockStore = configureMockStore();
const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuthorized,
  }
});

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header hasNavigation />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});

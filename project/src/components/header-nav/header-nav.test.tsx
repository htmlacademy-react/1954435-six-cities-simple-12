import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HeaderNav from './header-nav';
import { AuthorizationStatus, NameSpace } from '../../const';
import { createAPI } from '../../services/api';
import { State } from '../../types/state';
import { AnyAction } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<State, AnyAction>(middlewares);

describe('Component: HeaderNav', () => {
  it('should render correctly', () => {
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Authorized,
      }
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderNav />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render  "HeaderNav" component if user has status no_authorized', () => {
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuthorized,
      }
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderNav />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});

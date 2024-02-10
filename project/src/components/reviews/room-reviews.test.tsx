import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import RoomReviews from './room-reviews';
import { NameSpace, FetchStatus, AuthorizationStatus} from '../../const';
import { makeFakeReviews } from '../../utils/mocks';

const reviews = makeFakeReviews();

const mockStore = configureMockStore();

describe('Component: RooMReviews', () => {
  it('should render correctl if AuthorizationStatus.NoAuthorized', () => {

    const store = mockStore({
      [NameSpace.Reviews]: {
        reviews: [],
        status: FetchStatus.Success,
        postStatus: FetchStatus.Idle
      },
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.NoAuthorized
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <RoomReviews reviews={reviews} />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByTestId('room-reviews')).toBeInTheDocument();
  });

  it('should render correctl if AuthorizationStatus.Authorized', () => {

    const store = mockStore({
      [NameSpace.Reviews]: {
        reviews: [],
        status: FetchStatus.Success,
        postStatus: FetchStatus.Idle
      },
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Authorized
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <RoomReviews reviews={reviews} />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });
});

import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import LoginForm from './login-form';
import { AuthorizationStatus, NameSpace, FetchStatus } from '../../const';

const mockStore = configureMockStore();

describe('Component: LoginForm', () => {
  it('should render correctl', async () => {
    const history = createMemoryHistory();
    const store = mockStore({
      [NameSpace.User]: {
        authorizationStatus: AuthorizationStatus.Unknown,
        userData: null,
        status: FetchStatus.Idle
      }
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginForm />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('login'), 'keks');
    await userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/keks/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});


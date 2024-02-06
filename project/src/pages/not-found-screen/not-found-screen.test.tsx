import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import NotFoundScreen from './not-found-screen';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <NotFoundScreen />
        </HelmetProvider>
      </HistoryRouter>,
    );

    const headerElement = screen.getByText(/404/i);
    const textElement = screen.getByText(/Page Not Found/i);
    const linkElement = screen.getByText(/Home Page/i);

    expect(headerElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});


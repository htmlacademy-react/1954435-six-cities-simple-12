import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {store} from './store';
import {Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';
import 'react-toastify/dist/ReactToastify.css';
import NotificationItem from './components/notification-item/notification-item';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <NotificationItem />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);

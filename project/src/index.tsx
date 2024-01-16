import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {store} from './store';
import {Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationItem from './components/notification-item/notification-item';

import { checkAuthAction, fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <NotificationItem />
      <App />
    </Provider>
  </React.StrictMode>,
);

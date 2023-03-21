import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
//import {reviews} from './mocks/reviews';

//const PLACE_CARD_COUNT = 312;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <App //roomCardCount = {offers.length} или roomCardCount={PLACE_CARD_COUNT}
      offers = {offers}
      //reviews = {reviews}
    />
  </React.StrictMode>,
);

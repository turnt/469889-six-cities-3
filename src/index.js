import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Setting = {
  OFFERS_COUNT: 5
};

ReactDOM.render(
    <App offersCount={Setting.OFFERS_COUNT} />,
    document.getElementById(`root`)
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Setting = {
  OFFERS: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`
  ]
};

ReactDOM.render(
    <App offers={Setting.OFFERS} />,
    document.getElementById(`root`)
);

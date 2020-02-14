import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = ({offers}) => {
  return (
    <Main offers={offers} onHeaderClick={() => {}} />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;

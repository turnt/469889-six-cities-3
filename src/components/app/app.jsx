import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({offers}) => {
  return (
    <Main offers={offers}/>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.string)
};

export default App;

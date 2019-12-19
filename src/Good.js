import PropTypes from 'prop-types';
import React from 'react';

const Good = ({ goods }) => (
  goods.map(good => (
    <li key={good.id}>{good.name}</li>
  )));

Good.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Good;

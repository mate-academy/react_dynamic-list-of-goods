import PropTypes from 'prop-types';
import React from 'react';

const Good = ({ good }) => (
  <li key={good.id}>{good.name}</li>
);

Good.propTypes = {
  good: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Good;

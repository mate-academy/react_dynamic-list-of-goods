import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <li
    style={{ color: good.color }}
  >
    {good.name}
  </li>
);

Good.propTypes = {
  good: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};

export default Good;

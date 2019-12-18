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
  good: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Good;

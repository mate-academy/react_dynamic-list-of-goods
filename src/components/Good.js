import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <li
    key={good.id}
    style={{ color: good.color }}
  >
    {good.name}
  </li>
);

Good.propTypes = {
  good: PropTypes({
    color: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
export default Good;

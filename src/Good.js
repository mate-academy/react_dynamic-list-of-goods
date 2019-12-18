import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <li>
    <span
      style={{ color: good.color }}
    >
      {good.name}
    </span>
  </li>
);

Good.propTypes = {
  good: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

export default Good;

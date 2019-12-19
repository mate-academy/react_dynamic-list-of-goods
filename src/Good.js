import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => (
  <li key={good.id}>
    <h2
      style={{ color: good.color }}
    >
      {good.name}
    </h2>
  </li>
);

Good.propTypes = {
  good: PropTypes.objectOf.isRequired,
};

export default Good;

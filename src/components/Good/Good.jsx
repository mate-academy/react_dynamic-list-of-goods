import React from 'react';
import PropTypes from 'prop-types';

export function Good({ good }) {
  return (
    <li key={good.id} style={{ color: `${good.color}` }}>
      {good.name}
    </li>
  );
}

Good.propTypes = {
  good: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItems({ good }) {
  return (
    <li style={{
      color: good.color,
      listStyleType: 'none',
    }}
    >
      {good.name}
    </li>
  );
}

TodoItems.propTypes = {
  good: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

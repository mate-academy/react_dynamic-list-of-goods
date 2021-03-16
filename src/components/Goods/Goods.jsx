import React from 'react';
import PropTypes from 'prop-types';

export function Goods({ item }) {
  const { name, color } = item;

  return (
    <li
      className="Goods"
      style={{ color }}
    >
      {name}
    </li>
  );
}

Goods.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

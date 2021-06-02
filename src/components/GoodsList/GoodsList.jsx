import React from 'react';
import PropTypes from 'prop-types';

export function GoodsList({ goods }) {
  return (
    <ul>
      {goods.map(({ id, color, name }) => (
        <li
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export function GoodsList({ goods }) {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
    }),
  ).isRequired,
};

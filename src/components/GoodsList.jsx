import React from 'react';
import propTypes from 'prop-types';

export function GoodsList({ goods }) {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          className={good.color}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: propTypes.arrayOf({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
  }).isRequired,
};

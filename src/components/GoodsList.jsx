import React from 'react';
import propTypes from 'prop-types';

export function GoodsList({ goods }) {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id}>
          {good.name}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: propTypes.arrayOf({}).isRequired,
};

import React from 'react';
import GoodsPropTypes from './PropTypes/GoodsPropTypes';

function GoodsList({ goods }) {
  return (
    <ol type="1">
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ol>
  );
}

GoodsList.propTypes = GoodsPropTypes;

export default GoodsList;

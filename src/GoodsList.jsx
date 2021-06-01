import React from 'react';
import PropTypes from 'prop-types';

export function GoodsList({ goodList }) {
  return (
    <>
      {goodList.map(good => (
        <li
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </>
  );
}

GoodsList.prototype = {
  goodList: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
};

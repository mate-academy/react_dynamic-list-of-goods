import React from 'react';
import PropTypes from 'prop-types';

export function GoodsList({ goodList }) {
  return (
    <>
      {goodList.map(({ id, color, name }) => (
        <li
          key={id}
          style={{ color }}
        >
          {name}
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

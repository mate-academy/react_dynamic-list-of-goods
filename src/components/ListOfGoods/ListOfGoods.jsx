import React from 'react';
import propTypes from 'prop-types';

export const ListOfGoods = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

ListOfGoods.propTypes = {
  goods: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      color: propTypes.string.isRequired,
    }),
  ).isRequired,
};

import React from 'react';
import propTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <ul className="list-group">
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
        className="list-group-item list-group-item-primary"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      color: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

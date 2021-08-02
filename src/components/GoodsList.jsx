import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="list-group  text-center">
    {goods.map(good => (
      <li
        className="list-item"
        key={good.id}
        style={{ color: `${good.color}` }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

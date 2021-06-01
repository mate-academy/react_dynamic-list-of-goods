import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.scss';

export const GoodsList = ({ goods }) => (
  <ul className="goods__list">
    {goods.map(good => (
      <li
        className="goods__list--item"
        key={good.id}
        style={{ color: good.color }}
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

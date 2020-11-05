import React from 'react';
import PropTypes from 'prop-types';

import './GoodsList.scss';

export const GoodsList = ({ goods }) => (
  <ul className="goods">
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
        className="goods__item"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};

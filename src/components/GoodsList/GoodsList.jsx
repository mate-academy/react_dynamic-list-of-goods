import React from 'react';
import PropTypes from 'prop-types';

import './goodsList.scss';

export const GoodsList = ({ goods }) => (
  <ul className="goods">
    {goods.map(good => (
      <li
        className="goods__item"
        key={good.id}
        style={{color: good.color}}
      >
        {good.name}
      </li>
    ))}
  </ul>
)

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

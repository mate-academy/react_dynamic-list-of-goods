import React from 'react';
import PropTypes from 'prop-types';
import { goodProps } from '../../shapes/shapes';

export const GoodsList = ({ goods }) => (
  <ol className="goods">
    {goods.map(good => (
      <li
        className="goods__item"
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ol>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({ goodProps }).isRequired,
  ).isRequired,
};

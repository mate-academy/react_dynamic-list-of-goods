import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ currentGoods }) => (
  <ul>
    {currentGoods.map(product => (
      <li
        key={product.id}
        style={{ color: product.color }}
      >
        {product.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  currentGoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

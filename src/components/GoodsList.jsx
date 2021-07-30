import React from 'react';
import propTypes, { arrayOf } from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(product => (
      <li key={product.id} style={{ color: product.color }}>
        {product.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
  })).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id} style={{ color: product.color }}>
        {product.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  products: PropTypes.arrayOf().isRequired,
};

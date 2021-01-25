import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ products }) => (
  <>
    <ul>
      {products.map(product => (
        <li
          key={product.id}
          style={{
            color: `${product.color}`,
          }}
        >
          {product.name}
        </li>
      ))}
    </ul>
  </>
);

GoodList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })).isRequired,
};

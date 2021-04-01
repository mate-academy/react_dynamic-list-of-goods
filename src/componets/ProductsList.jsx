import React from 'react';
import PropTypes from 'prop-types';

export function ProductsList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id} style={{ color: product.color }}>
          {product.name}
        </li>
      ))}
    </ul>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

ProductsList.defaultProps = {
  products: [],
};

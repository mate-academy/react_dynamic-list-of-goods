import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ listofProducts }) => (
  <ul>
    {listofProducts.length > 0
      && listofProducts.map(product => (
        <li
          key={product.id}
          style={{ color: `${product.color}` }}
        >
          {product.name}
        </li>
      ))
    }
  </ul>
);

GoodsList.propTypes = {
  listofProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

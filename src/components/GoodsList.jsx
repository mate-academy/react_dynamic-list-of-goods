import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = ({ goods }) => (
  <ul>
    {goods.map(product => (
      <li
        key={product.id}
        style={{ color: product.color }}
      >
        {product.name}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ),
};

GoodList.defaultProps = {
  goods: [],
};

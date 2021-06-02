import React from 'react';

import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <>
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
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number,
        name: PropTypes.string,
        color: PropTypes.string,
      },
    ),
  ).isRequired,
};

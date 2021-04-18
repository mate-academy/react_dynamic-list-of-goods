import React from 'react';
import PropTypes from 'prop-types';

import './goodsList.scss';

export const GoodsList = ({ currentGoods }) => (
  <>
    <ul className="goodList">
      {currentGoods.map(product => (
        <li
          key={product.id}
          className="goodList__item"
          style={{ color: product.color }}
        >
          {product.name}
        </li>
      ))}
    </ul>
  </>
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

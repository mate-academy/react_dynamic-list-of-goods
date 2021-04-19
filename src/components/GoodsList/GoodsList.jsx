import React from 'react';
import PropTypes from 'prop-types';
import { ProductType } from '../../types';

export const GoodsList = ({ goods }) => {

  return (
    <ul className="goodsList">
      {goods && goods.map(product => (
        <li
          key={product.id}
          className="productElement"
          style={{ color: product.color }}
        >
          {product.name}
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(ProductType),
};

GoodsList.defaultProps = {
  goods: [],
};

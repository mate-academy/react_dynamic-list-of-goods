import React from 'react';
import PropTypes from 'prop-types';
import { ProductType } from '../../types';

export const GoodsList = ({ goods }) => {
  function prepareGoods(products) {
    if (!products) {
      return null;
    }

    const res = products
      .map(product => (
        <li
          key={product.id}
          className="productElement"
          style={{ color: product.color }}
        >
          {product.name}
        </li>
      ));

    return res;
  }

  return (
    <ul className="goodsList">
      {prepareGoods(goods)}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(ProductType),
};

GoodsList.defaultProps = {
  goods: [],
};

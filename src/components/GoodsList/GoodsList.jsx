import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good';

export const GoodsList = ({ goods }) => (
  <ul className="goods">
    <li className="goods__item">
      <div className="goods__item-id">ID</div>
      <div className="goods__item-name">Name</div>
      <div className="goods__item-color">Color</div>
    </li>

    {goods.map(good => (
      <li
        className="goods__item"
        key={good.id}
      >
        <Good good={good} />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { GoodsShape } from '../../types';
import { Good } from '../Good';

export const GoodsList = ({ goods }) => (
  <ul className="list-group">
    {goods.map(good => (
      <li
        style={{
          color: 'white',
          backgroundColor: `${good.color}`,
        }}
        key={good.id}
        className="list-group-item"
      >
        <Good name={good.name} />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(GoodsShape).isRequired,
};

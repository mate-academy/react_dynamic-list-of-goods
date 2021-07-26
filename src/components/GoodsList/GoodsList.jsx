import React from 'react';
import PropTypes from 'prop-types';
import { GoodsShape } from '../../types';
import { Good } from '../Good';

export const GoodsList = ({ goods }) => (
  <ul className="list-group">
    {goods.map(good => (
      <Good
        good={good}
      />
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(GoodsShape).isRequired,
};

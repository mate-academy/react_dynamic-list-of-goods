import React from 'react';
import { PropTypes } from 'prop-types';
import { Good } from '../Good/Good';
import { TypeGood } from '../../types';

export const GoodsList = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => <Good key={good.id} good={good} />)}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(TypeGood).isRequired,
};

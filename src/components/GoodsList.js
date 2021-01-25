import React from 'react';
import { PropTypes } from 'prop-types';
import { Good } from './Good';
import { TypeGood } from '../types';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <Good {...good} />
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape(TypeGood),
  ).isRequired,
};

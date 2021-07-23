import React from 'react';
import PropTypes from 'prop-types';
import { Good } from '../Good';
import { GoodType } from '../../types';

import './GoodsList.scss';

export const GoodsList = ({ goods }) => (
  <ul className="list-goods">
    {goods.map(good => (
      <li key={good.id}>
        <Good good={good} />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(GoodType.isRequired).isRequired,
};

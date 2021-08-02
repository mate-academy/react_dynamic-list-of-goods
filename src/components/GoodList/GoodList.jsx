import React from 'react';
import { Good } from '../Good/Good';
import { goodListPropTypes } from '../types';

export const GoodList = ({ goods }) => (
  <ul>
    {goods.map(good => <Good good={good} />) }
  </ul>
);

GoodList.propTypes = goodListPropTypes;

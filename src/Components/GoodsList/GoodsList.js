import React from 'react';
import { Good } from '../Good';
import { GoodsListShape } from '../../Shapes/GoodsListShape';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <Good
        key={good.id}
        good={good}
      />
    ))}
  </ul>
);

GoodsList.propTypes = GoodsListShape;

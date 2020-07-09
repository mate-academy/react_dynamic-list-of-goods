import React from 'react';
import { GoodInterface } from './interfaces';

interface GoodsInterface {
  goods: GoodInterface[];
}

export const GoodsList: React.FC<GoodsInterface> = ({ goods }) => (
  <ul>
    {
      goods.map(good => (
        <li key={good.name} style={{ color: good.color }}>{good.name}</li>
      ))
    }
  </ul>
);

import React from 'react';
import { GoodsProps } from './interfaces';

export const GoodsList: React.FC<GoodsProps> = ({ goods }) => {
  return (
    <ul>
      {
        goods.map(good => (
          <li key={good.name} style={{ color: good.color }}>{good.name}</li>
        ))
      }
    </ul>
  );
};

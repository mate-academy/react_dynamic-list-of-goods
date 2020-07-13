import React from 'react';
import { Good } from '../interfaces';

interface GoodsListProps {
  goodsList: Good[];
}

export const GoodsList: React.FC<GoodsListProps> = ({ goodsList }) => (
  <ul>
    {goodsList.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

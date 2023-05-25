import React from 'react';
import { Good } from './types/Good';

interface GoodProps {
  goods: Good[]
}

export const GoodsList: React.FC<GoodProps> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        color={good.color}
        style={{ color: `${good.color}` }}
      >
        {good.name}
        {good.name}
      </li>
    ))}
  </ul>
);

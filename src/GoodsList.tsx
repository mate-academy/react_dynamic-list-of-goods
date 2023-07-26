import React from 'react';
import { Good } from './types/Good';
import { Colors } from './types/Colors';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: Colors[good.color as keyof typeof Colors] }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

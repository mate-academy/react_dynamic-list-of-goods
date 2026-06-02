import React from 'react';
import { Good } from './types/Good';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
);

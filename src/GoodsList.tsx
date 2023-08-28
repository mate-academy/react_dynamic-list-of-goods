import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
  error: string | null;
};

export const GoodsList: React.FC<Props> = ({ goods, error }) => (
  <ul>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

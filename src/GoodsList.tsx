import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[],
  color: string,
};

export const GoodsList: React.FC<Props> = ({ goods, color }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

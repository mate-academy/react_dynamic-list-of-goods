import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li data-cy="good" style={{ color: `${good.color}` }} key={good.id}>
        {good.name}
      </li>
    ))}
  </ul>
);

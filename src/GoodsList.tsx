import React from 'react';
import { Good } from './types/Good';

type Props = {
  goodsList: Good[];
};

export const GoodsList: React.FC<Props> = ({ goodsList }) => (
  <ul>
    {goodsList.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

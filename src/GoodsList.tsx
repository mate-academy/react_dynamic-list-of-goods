import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li
        style={{ color }}
        key={id}
        data-cy="good"
      >
        {name}
      </li>
    ))}
  </ul>
);

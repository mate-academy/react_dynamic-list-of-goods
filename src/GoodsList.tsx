import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li
        key={id}
        data-cy="good"
        style={{ color: `${color}` }}
      >
        {name}
      </li>
    ))}
  </ul>
);

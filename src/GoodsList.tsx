import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <ul>
      {goods.map(({ id, color, name }) => (
        <li
          key={id}
          data-cy="good"
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  ),
);

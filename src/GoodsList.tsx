import React, { memo } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li
        key={id}
        data-cy="good"
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
));

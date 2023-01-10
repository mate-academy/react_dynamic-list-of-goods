import React, { memo } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = memo(({ goods }) => {
  return (
    <ul>
      {goods.map(({ name, color }) => (
        <li
          key={name}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
});

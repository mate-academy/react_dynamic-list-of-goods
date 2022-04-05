import React from 'react';
import { Good } from '../types';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
  return (
    <ul>
      {goods.map(({ id, name, color }) => (
        <li
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
});

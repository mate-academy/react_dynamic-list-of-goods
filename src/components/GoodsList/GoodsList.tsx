import React from 'react';
import { Item } from '../types';

interface Props {
  goods: Item[];
}

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
  return (
    <ol>
      {goods.map(({ id, name, color }) => (
        <li
          key={id}
          style={{ color }}
        >
          {name}
        </li>
      ))}
    </ol>
  );
});

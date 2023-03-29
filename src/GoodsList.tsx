import React from 'react';
import { Good } from './types/Good';

export const GoodsList = React.memo(
  ({ goods }: { goods: Good[] }) => {
    return (
      <ul>
        {goods.map(good => (
          <li
            key={good.id}
            data-cy="good"
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))}
      </ul>
    );
  },
);

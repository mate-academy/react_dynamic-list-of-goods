import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => {
    return (
      <ul>
        {goods.map(good => {
          const { name, id, color } = good;

          return (
            <li
              key={id}
              data-cy="good"
              style={{ color }}
            >
              {name}
            </li>
          );
        })}
      </ul>
    );
  },
);

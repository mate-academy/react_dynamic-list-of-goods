import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => (
    <ul>
      {goods.map(good => {
        const { id, name, color } = good;

        return (
          <li
            key={id}
            style={{ color }}
            data-cy="good"
          >
            {name}
          </li>
        );
      })}
    </ul>
  ),
);

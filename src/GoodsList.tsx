import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[] | null
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods && (
        goods.map(({
          id,
          name,
          color,
        }) => (
          <li
            key={id}
            data-cy="good"
            style={{ color }}
          >
            {name}
          </li>
        )))}
    </ul>
  );
};

import React, { CSSProperties } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList = React.memo(({ goods }: Props) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          className="good-item"
          style={{ '--color': good.color } as CSSProperties}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
});

GoodsList.displayName = 'GoodsList';

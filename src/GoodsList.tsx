import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// eslint-disable-next-line react/display-name
export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => {
    return (
      <ul>
        {goods.map(good => (
          <li key={good.id} data-cy="good" style={{ color: `${good.color}` }}>
            {good.name}
          </li>
        ))}
      </ul>
    );
  },
  (prev, next) => {
    const prevId = prev.goods.map(good => good.id);
    const nextId = next.goods.map(good => good.id);

    return (
      prevId.length === nextId.length && prevId.every(Id => nextId.includes(Id))
    );
  },
);

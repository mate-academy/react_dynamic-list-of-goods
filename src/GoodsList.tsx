import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  if (goods.length === 0) {
    return <p data-cy="no-goods">No goods loaded yet.</p>;
  }

  return (
    <ul data-cy="goods-list">
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          style={{ backgroundColor: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(GoodsList);

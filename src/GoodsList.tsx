import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const GoodsListBase: React.FC<Props> = ({ goods }) => {
  if (goods.length === 0) {
    return <p className="empty-message">No goods available.</p>;
  }

  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }} data-cy="good">
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export const GoodsList = React.memo(GoodsListBase);

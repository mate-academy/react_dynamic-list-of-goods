import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const GoodsListComponent: React.FC<Props> = ({ goods }) => {
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

export const GoodList = React.memo(GoodsListComponent);

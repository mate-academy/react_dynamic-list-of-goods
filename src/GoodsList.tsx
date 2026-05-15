import React from 'react';
import { Good } from './types/Good';

type GoodsListProps = {
  goods: Good[];
};

const GoodsListComponent = ({ goods }: GoodsListProps) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

export const GoodsList = React.memo(GoodsListComponent);

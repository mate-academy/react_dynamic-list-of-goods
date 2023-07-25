import React, { memo } from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

const GoodsListComponent: React.FC<Props> = ({ goods }) => (
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

export const GoodsList = memo(GoodsListComponent);

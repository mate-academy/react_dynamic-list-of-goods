import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const GoodsListComponent: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li style={{ color: good.color }} key={good.id} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
);

export const GoodsList = React.memo(GoodsListComponent);

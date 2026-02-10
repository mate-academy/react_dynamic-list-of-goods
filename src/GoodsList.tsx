import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

const GoodsListBase: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} className={good.color} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
);

export const GoodsList = React.memo(GoodsListBase);

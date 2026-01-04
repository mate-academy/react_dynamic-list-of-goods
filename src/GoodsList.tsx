import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// Окремо створюємо іменовану функцію
const GoodsListComponent: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" className={good.color}>
        {good.name}
      </li>
    ))}
  </ul>
);

// Обгортаємо в React.memo
export const GoodsList = React.memo(GoodsListComponent);

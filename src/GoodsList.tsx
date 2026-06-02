import React from 'react';
import { Good } from './types/Good';

interface Props {
  goods: Good[];
}

// Обгортаємо компонент у React.memo
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
));
GoodsList.displayName = 'GoodsList';

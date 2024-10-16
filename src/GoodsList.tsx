// GoodsList.tsx
import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: good.color }} // Використовуємо колір з даних
      >
        {good.name}
      </li>
    ))}
  </ul>
);

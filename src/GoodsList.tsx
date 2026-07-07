import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      // Додаємо атрибут style, де динамічно встановлюємо колір тексту li
      // відповідно до значення властивості good.color (наприклад, 'red', 'blue' тощо)
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

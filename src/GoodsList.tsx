import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// Використовуємо React.memo, щоб уникнути непотрібних повторних рендерингів компонента
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      // Рендеримо елемент списку з обов'язковим inline-стилем кольору та потрібним дата-атрибутом
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
));

// Встановлюємо ім'я відображення для мемоізованого компонента в React DevTools
GoodsList.displayName = 'GoodsList';

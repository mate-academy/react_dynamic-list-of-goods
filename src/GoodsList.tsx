import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// Обгортаємо компонент у React.memo для оптимізації рендерингу.
// Тепер GoodsList перерендериться лише тоді, коли масив goods фактично зміниться.
export const GoodsList: React.FC<Props> = React.memo(({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
));

// Додаємо displayName для зручного дебагу мемоізованого компонента в React DevTools
GoodsList.displayName = 'GoodsList';

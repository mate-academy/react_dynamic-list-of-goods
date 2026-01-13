import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

// 1. Оголошуємо компонент окремо
const GoodsListBase: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

// 2. Загортаємо в memo і додаємо displayName
export const GoodsList = React.memo(GoodsListBase);
GoodsList.displayName = 'GoodsList';

import React from 'react';
import { Good } from './types/Good';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList" data-cy="goods-list">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good" // КРИТИЧНО: додаємо цей атрибут сюди
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

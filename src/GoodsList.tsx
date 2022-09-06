import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul
    className="
      App__goods-list
      list__goods
      content"
  >
    {goods.map(good => (
      <li
        className="list__goods-item"
        key={good.id}
        data-cy="good"
        style={{ color: `${good.color}` }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

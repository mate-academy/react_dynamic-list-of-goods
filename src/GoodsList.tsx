import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods">
    {goods.map(good => (
      <li
        className={`goods__good--${good.color}`}
        key={good.id}
        data-cy="good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

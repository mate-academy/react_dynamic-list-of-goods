import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="Good">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={`Good__Item Good__Item--${good.color}`}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

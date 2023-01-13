import React from 'react';
import { Good } from '../../types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="mt-3">
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        style={{ color: `${good.color}` }}
        className="subtitle is-6"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

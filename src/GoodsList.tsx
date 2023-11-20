import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        className={`${good.color === 'red' ? 'is-ripe ' : ''}`
          + `${good.color === 'green' ? 'is-raw ' : ''}`
          + `${good.color === 'blue' ? 'is-cool ' : ''}`}
        data-cy="good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

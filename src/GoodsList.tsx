import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        className={
          (good.color === 'red' && 'red') ||
          (good.color === 'blue' && 'blue') ||
          (good.color === 'green' && 'green') ||
          ''
        }
        key={good.id}
        data-cy="good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={
          good.color === 'red' ? 'red' :
          good.color === 'green' ? 'green' :
          good.color === 'blue' ? 'blue'
          : ''
        }
      >
        {good.name}
      </li>
    ))}
  </ul>
);

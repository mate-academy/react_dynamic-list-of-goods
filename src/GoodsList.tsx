import React from 'react';
import cn from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        className={cn({
          'good-red': good.color === 'red',
          'good-green': good.color === 'green',
          'good-blue': good.color === 'blue',
        })}
        key={good.id}
        data-cy="good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

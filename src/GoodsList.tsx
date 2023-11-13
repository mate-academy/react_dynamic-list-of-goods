import React from 'react';
import cn from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const { color } = good;

      return (
        <li
          key={good.id}
          data-cy="good"
          className={cn({
            'color-red': color === 'red',
            'color-green': color === 'green',
            'color-blue': color === 'blue',
          })}
        >
          {good.name}
        </li>
      );
    })}
  </ul>
);

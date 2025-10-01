import React from 'react';
import { Good } from './types/Good';
import cn from 'classnames';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        className={cn({
          red: good.color === 'red',
          green: good.color === 'green',
          blue: good.color === 'blue',
        })}
        key={good.id}
        data-cy="good"
      >
        {good.name}
      </li>
    ))}
  </ul>
);

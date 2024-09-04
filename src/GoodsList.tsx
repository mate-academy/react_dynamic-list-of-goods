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
        key={good.id}
        data-cy="good"
        className={cn({
          red: good.color === 'red',
          green: good.color === 'green',
          blue: good.color === 'blue',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

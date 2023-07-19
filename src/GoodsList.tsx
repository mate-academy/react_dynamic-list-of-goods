import React from 'react';
import cl from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={cl({
          'is-red': good.color === 'red',
          'is-green': good.color === 'green',
          'is-blue': good.color === 'blue',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

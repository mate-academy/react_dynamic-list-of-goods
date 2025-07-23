import React from 'react';
import { Good } from './types/Good';
import classNames from 'classnames';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={classNames('', {
          'color-red': good.color === 'red',
          'color-green': good.color === 'green',
          'color-blue': good.color === 'blue',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

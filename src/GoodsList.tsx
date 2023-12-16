import React from 'react';
import cn from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

enum GoodColors {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={cn('good', {
          'good--red': good.color === GoodColors.red,
          'good--blue': good.color === GoodColors.blue,
          'good--green': good.color === GoodColors.green,
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

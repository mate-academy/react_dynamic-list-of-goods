import React from 'react';
import cn from 'classnames';
import { Good, GoodColor } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        data-cy="good"
        className={cn({
          redGood: good.color === GoodColor.Red,
          greenGood: good.color === GoodColor.Green,
          blueGood: good.color === GoodColor.Blue,
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

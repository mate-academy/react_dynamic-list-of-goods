import cn from 'classnames';
import React from 'react';
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
        // eslint-disable-next-line
        className={cn({
          redButton: good.color === 'red',
          blueButton: good.color === 'blue',
          greenButton: good.color === 'green',
        })}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

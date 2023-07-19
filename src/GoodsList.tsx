import React from 'react';
import cn from 'classnames';
import { Good } from './types/Good';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li
        key={id}
        data-cy="good"
        className={cn({
          [`is-${color}`]: color,
        })}
      >
        {name}
      </li>
    ))}
  </ul>
);

import React from 'react';
import { Good } from './types/Good';
import cn from 'classnames';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          className={cn(
            good.color === 'red'
              ? 'red'
              : good.color === 'green'
                ? 'green'
                : good.color === 'blue'
                  ? 'blue'
                  : 'black',
          )}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

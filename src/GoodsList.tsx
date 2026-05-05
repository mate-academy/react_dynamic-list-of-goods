import React from 'react';
import { Good } from './types/Good';
import cn from 'classnames';

type Props = {
  goods: Good[];
};

export const GoodsList = React.memo(({ goods }: Props) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" className={cn(`${good.color}`)}>
          {good.name}
        </li>
      ))}
    </ul>
  );
});
GoodsList.displayName = 'GoodsList';

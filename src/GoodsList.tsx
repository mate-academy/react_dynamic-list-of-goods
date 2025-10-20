import React from 'react';
import cn from 'classnames';
import type { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodsList" data-cy="goods-list">
      {goods.map(good => (
        <li
          key={good.id}
          data-cy="good"
          className={cn('GoodsList__item', `GoodsList__item--${good.color}`)}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

import React from 'react';
import { Good } from './types/Good';
import cn from 'classnames';

type Props = {
  goods: Good[];
};

const GoodsListComponent: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" className={cn(`${good.color}`)}>
        {good.name}
      </li>
    ))}
  </ul>
);

export const GoodsList = React.memo(GoodsListComponent);

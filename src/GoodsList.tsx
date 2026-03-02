import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsListBase: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }} data-cy="good">
        {good.name}
      </li>
    ))}
  </ul>
);

GoodsListBase.displayName = 'GoodsList';

export const GoodsList = React.memo(GoodsListBase);

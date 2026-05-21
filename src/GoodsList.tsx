import React from 'react';
import { Good } from './types/Good';
import { memo } from 'react';

type Props = {
  goods: Good[];
};

const GoodsListMemo: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} data-cy="good" style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

export const GoodsList = memo(GoodsListMemo);

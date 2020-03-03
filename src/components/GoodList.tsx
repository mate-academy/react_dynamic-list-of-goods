import React, { FC } from 'react';

export interface Good {
  id: number;
  name: string;
  color: string;
}

interface GoodsListState {
  goods: Good[],
}

export const GoodsList: FC<GoodsListState> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

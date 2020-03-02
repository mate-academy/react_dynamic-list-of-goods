import React, { FC } from 'react';

type GoodsProps = { goods: Good[] };

export const Goods: FC<GoodsProps> = ({ goods }) => (
  <ul>
    {
      goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>{good.name}</li>
      ))
    }
  </ul>
);

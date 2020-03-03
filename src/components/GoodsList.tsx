import React, { FC } from 'react';

type Goods = { goods: Props[] };

export const GoodsList: FC<Goods> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

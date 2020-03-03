import React, { FC } from 'react';

export interface Good {
  id: number;
  name: string;
  color: string;
}


type Props = {
  goods: Good[];
};

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>{good.name}</li>
    ))}
  </ul>
);

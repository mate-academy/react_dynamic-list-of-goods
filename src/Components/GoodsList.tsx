import React, { FC } from 'react';
import { Good } from '../interfaces';


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

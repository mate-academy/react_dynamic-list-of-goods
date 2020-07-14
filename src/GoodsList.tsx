import React from 'react';
import { Goods } from './interface';

interface Props {
  goods: Goods[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {
      goods.map(good => (
        <li key={good.name} style={{ color: good.color }}>{good.name}</li>
      ))
    }
  </ul>
);

import React from 'react';
import { GoodInterface } from './interfaces';

interface Props {
  goods: GoodInterface[];
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

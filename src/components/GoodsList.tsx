import React from 'react';
import { Goods } from './interfaces';

const GoodsList: React.FC<Goods> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

export default GoodsList;

import React from 'react';
import { Goods } from '../types/Goods';

type Props = {
  goods: Goods[],
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li
          key={good.id}
          style={{ color: `${good.color}` }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

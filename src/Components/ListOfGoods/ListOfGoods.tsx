import React from 'react';

interface Goods {
  goods: { id: number; name: string; color: string }[];
}

export const ListOfGoods: React.FC<Goods> = ({ goods }) => (
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

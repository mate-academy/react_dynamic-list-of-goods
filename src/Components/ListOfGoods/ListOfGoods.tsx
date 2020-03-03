import React from 'react';

interface Goods {
  goods: Good[];
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

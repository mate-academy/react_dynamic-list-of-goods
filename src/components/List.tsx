import React, { FC } from 'react';

export const List: FC<Goods> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li className="item" key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

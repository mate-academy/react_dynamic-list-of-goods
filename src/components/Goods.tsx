import React, { FC } from 'react';

interface Goods {
  goods: Good[];
}

export const Goods: FC<Goods> = ({ goods }) => (
  <ul className="menu-list">
    {Object.values(goods).map(good => (
      <li
        key={good.id}
        className="title is-6"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

import React, { FC } from 'react';
import { Good } from '../interfaces';

interface Props {
  goods: Good[];
}

export const GoodsList: FC<Props> = ({ goods }) => (
  <ul className="menu-list">
    {goods.map(good => (
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

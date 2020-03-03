import React, { FC } from 'react';
import { Good } from '../../types';

interface Props {
  goodsList: Good[];
}

export const GoodsList: FC<Props> = ({ goodsList }) => (
  <ul>
    {goodsList.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

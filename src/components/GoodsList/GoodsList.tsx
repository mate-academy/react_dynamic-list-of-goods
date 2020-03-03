import React, { FC } from 'react';
import { Good } from '../../types';

interface Props {
  goodsList: Good[];
}

export const GoodsList: FC<Props> = ({ goodsList }) => (
  <ul>
    {goodsList.map(item => (
      <li
        key={item.id}
        style={{ color: item.color }}
      >
        {item.name}
      </li>
    ))}
  </ul>
);

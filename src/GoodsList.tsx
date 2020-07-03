import React from 'react';
import { Goods } from './api';

type Props = {
  goods: Goods[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ id, name, color }) => (
      <li key={id} style={{ color }}>
        {name}
      </li>
    ))}
  </ul>
);

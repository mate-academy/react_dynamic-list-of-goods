import React from 'react';
import { Product } from '../types/Product';

type Props = {
  goods: Product[];
};

export const ListOfGoods: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li key={item.id} style={{ color: item.color }}>
        {item.name}
      </li>
    ))}
  </ul>
);

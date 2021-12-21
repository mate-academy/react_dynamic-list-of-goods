import React from 'react';
import './ListOfGoods.scss';
import { Product } from '../types/Product';

type Props = {
  goods: Product[];
};

export const ListOfGoods: React.FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map(item => (
      <li
        key={item.id}
        style={{ color: item.color }}
        className="list__item"
      >
        {item.name}
      </li>
    ))}
  </ul>
);

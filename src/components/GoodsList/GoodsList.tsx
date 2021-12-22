import React from 'react';
import { Product } from '../../types/Product';
import './GoodsList.scss';

type Props = {
  goods: Product[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods-list">
      {goods.map(item => (
        <li
          key={item.id}
          className="goods-list__item"
          style={{ color: item.color }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

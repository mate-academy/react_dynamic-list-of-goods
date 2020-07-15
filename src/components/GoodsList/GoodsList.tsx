import React from 'react';
import { Good } from '../../interfaces';

interface GoodsListProps {
  goods: Good[];
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
  return (
    <ul className="list">
      {
        goods.map(good => (
          <li
            key={good.id}
            style={{ color: good.color }}
          >
            {good.name}
          </li>
        ))
      }
    </ul>
  );
};

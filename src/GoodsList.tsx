import React from 'react';
import { Good } from './api/goods';

interface GoodsListProps {
  goods: Good[];
}

const GoodsList: React.FC<GoodsListProps> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);

export default GoodsList;

import React from 'react';
import { Good } from '../Good/Good';

interface Good {
  id: number;
  name: string;
  color: string;
}

type GoodsListProps = {
  goods: Good[];
};

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <Good key={good.id} name={good.name} color={good.color} />
    ))}
  </ul>
);

import React, { FC } from 'react';
import { GoodItem } from '../GoodItem/GoodItem';

interface GoodsListProps {
  goods: Good[];
}

export const GoodsList: FC<GoodsListProps> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <GoodItem
        key={good.id}
        name={good.name}
        color={good.color}
      />
    ))}
  </ul>
);

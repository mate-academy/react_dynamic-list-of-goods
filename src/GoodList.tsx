import React from 'react';
import { Product } from './interface';
import { GoodItem } from './GoodItem';

interface GoodProps {
  goods: Product[];
}

export const GoodList: React.FC<GoodProps> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <GoodItem
          key={good.id}
          color={good.color}
          name={good.name}
        />
      ))}
    </ul>
  );
};

import React from 'react';
import { Product } from './interface';
import { GoodItem } from './GoodItem';

interface Props {
  goods: Product[];
}

export const GoodList: React.FC<Props> = ({ goods }) => {
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

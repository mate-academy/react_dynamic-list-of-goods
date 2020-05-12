
import React from 'react';

import { GoodItem } from './GoodItem';
import { Good } from './interfaces';

type GoodsListProps = {
  goods: Good[];
};

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => (
  <>
    {goods.map(good => (
      <GoodItem id={good.id} name={good.name} color={good.color} />
    ))}
  </>
);

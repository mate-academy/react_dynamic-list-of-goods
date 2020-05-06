import React, { FC } from 'react';
import { Good } from './Good';

import './GoodsList.css';

interface Props {
  goods: Goods;
}

export const GoodsList: FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <Good key={good.id} name={good.name} color={good.color} />
      ))}
    </ul>
  );
};

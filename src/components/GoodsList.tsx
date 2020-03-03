import React, { FC } from 'react';
import { Good } from './Good';

import './GoodsList.css';

interface Props {
  list: Goods;
}

export const GoodsList: FC<Props> = ({ list }) => {
  return (
    <ul>
      {list.map(good => (
        <Good key={good.id} good={good} />
      ))}
    </ul>
  );
};

import React from 'react';
import { GoodsListItem } from '../GoodsListItem/GoodsListItem';

type Props = {
  goods: Goods[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {
        goods.map(item => (
          <GoodsListItem
            name={item.name}
            key={item.id}
            color={item.color}
          />
        ))
      }
    </ul>
  );
};

import React from 'react';
import { GoodsItem } from '../GoodsItem/GoodsItem';

type Props = {
  goodsList: GoodsItem[];
};

export const GoodsList: React.FC<Props> = ({ goodsList }) => (
  <ul className="goods-list">
    {goodsList.map((goodsItem: GoodsItem) => (
      <GoodsItem goodsItem={goodsItem} key={goodsItem.id} />))}
  </ul>
);

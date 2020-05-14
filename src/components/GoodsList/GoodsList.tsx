import React from 'react';
import { GoodsItem } from '../GoodsItem/GoodsItem';

type Props = {
  goodsList: GoodsItem[];
};

export const GoodsList: React.FC<Props> = ({ goodsList }) => (
  <>
  {(goodsList.length > 0) && (
    <ul className="goods-list">

    {goodsList.map((goodsItem: GoodsItem) => (
      <GoodsItem goodsItem={goodsItem} key={goodsItem.id} />))}
  </ul>
  )}
  {(goodsList.length === 0) && (
    <p className="goods-list__note">
      Select option of the list you want.
    </p>
  )}
  </>
);

import React from 'react';

type Props = {
  goodsItem: GoodsItem;
};

export const GoodsItem: React.FC<Props> = ({ goodsItem }) => (
  <li
    className="goods-list__item"
    style={{ color: `${goodsItem.color}` }}
  >
    {goodsItem.name}
  </li>
);

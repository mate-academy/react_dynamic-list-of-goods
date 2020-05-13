import React from 'react';
import GoodsItem from './GoodsItem';

type Props = {
  goodsList: GoodsItem[];
};

const GoodsList: React.FC<Props> = ({ goodsList }) => {
  return (
    <ul>
      {goodsList.map((goodsItem: GoodsItem) => (
        <GoodsItem
          key={goodsItem.id}
          goodsItem={goodsItem}
        />
      ))}
    </ul>
  );
};

export default GoodsList;

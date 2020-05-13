import React from 'react';

type Props = {
  goodsItem: GoodsItem;
};

const GoodsItem: React.FC<Props> = ({ goodsItem }) => {
  const { color, name } = goodsItem;

  return (
    <li style={{ color }}>
      {name}
    </li>
  );
};

export default GoodsItem;

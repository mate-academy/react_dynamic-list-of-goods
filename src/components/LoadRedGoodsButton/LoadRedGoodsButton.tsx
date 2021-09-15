import React from 'react';

type Props = {
  getGoods: () => void;
};

export const LoadRedGoodsButton: React.FC<Props> = (props) => {
  return (
    <button
      type="button"
      onClick={props.getGoods}
    >
      Load Red Goods
    </button>
  );
};

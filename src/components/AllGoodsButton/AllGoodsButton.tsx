import React from 'react';

type Props = {
  getGoods: () => void;
};

export const AllGoodsButton: React.FC<Props> = (props) => {
  return (
    <button
      type="button"
      onClick={props.getGoods}
    >
      Load All Goods
    </button>
  );
};

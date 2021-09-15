import React from 'react';

type Props = {
  getGoods: () => void;
};

export const LoadFirst5Button: React.FC<Props> = (props) => {
  return (
    <button
      type="button"
      onClick={props.getGoods}
    >
      Load First 5 Goods
    </button>
  );
};

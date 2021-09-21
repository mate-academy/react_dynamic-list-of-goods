import React from 'react';

type Props = {
  getGoods: () => void;
  buttonTitle: string;
};

export const GoodsButton: React.FC<Props> = (props) => {
  const { getGoods, buttonTitle } = props;

  return (
    <button
      type="button"
      onClick={getGoods}
    >
      {buttonTitle}
    </button>
  );
};

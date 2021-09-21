import React from 'react';

type Props = {
  getGoods: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonTitle: string;
  thisId: string;
};

export const GoodsButton: React.FC<Props> = (props) => {
  const { getGoods, buttonTitle, thisId } = props;

  return (
    <button
      type="button"
      id={thisId}
      onClick={getGoods}
    >
      {buttonTitle}
    </button>
  );
};

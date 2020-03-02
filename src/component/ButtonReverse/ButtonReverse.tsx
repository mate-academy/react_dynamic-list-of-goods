import React from 'react';

interface Buttons {
  goodsFromServer?: string[];
  callbackUpdateData(value1: any, value2?: any): void;
  originalGoodsFromServer?: {};
  defaultSelect?: boolean;
}


export const ButtonReverse: React.FC<Buttons> = (props: any) => {
  const { goodsFromServer, callbackUpdateData } = props;
  const sortedArr = [...goodsFromServer as []].reverse();

  return (
    <button
      type="button"
      onClick={() => callbackUpdateData(sortedArr)}
    >
      Reverse
    </button>
  );
};

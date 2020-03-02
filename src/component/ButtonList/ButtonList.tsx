import React from 'react';
import { ButtonReverse } from '../ButtonReverse/ButtonReverse';
import { ButtonSortAlphabetically }
  from '../ButtonSortAlphabetically/ButtonSortAlphabetically';
import { ButtonReset } from '../ButtonReset/ButtonReset';
import { ButtonSortByLength } from '../ButtonSortByLength/ButtonSortByLength';
import { Select } from '../Select/Select';

interface Button {
  goodsFromServer: string[];
  callbackUpdateData(value1: any, value2?: any): void;
  originalGoodsFromServer: string[];
  defaultSelect: number;
}

export const ButtonList: React.FC<Button> = (props) => {
  const {
    goodsFromServer,
    callbackUpdateData,
    originalGoodsFromServer,
    defaultSelect,
  } = props;

  return (
    <div>
      <ButtonReverse
        goodsFromServer={goodsFromServer}
        callbackUpdateData={callbackUpdateData}
      />

      <ButtonSortAlphabetically
        goodsFromServer={goodsFromServer}
        callbackUpdateData={callbackUpdateData}
      />

      <ButtonReset
        originalGoodsFromServer={originalGoodsFromServer}
        callbackUpdateData={callbackUpdateData}
      />

      <ButtonSortByLength
        goodsFromServer={goodsFromServer}
        callbackUpdateData={callbackUpdateData}
      />

      <Select
        originalGoodsFromServer={originalGoodsFromServer}
        callbackUpdateData={callbackUpdateData}
        defaultSelect={defaultSelect}
      />
    </div>
  );
};

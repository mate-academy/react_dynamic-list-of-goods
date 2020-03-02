import React from 'react';

export const ButtonReset = (props: any) => {
  const { callbackUpdateData, originalGoodsFromServer } = props;
  const sortedArr = [...originalGoodsFromServer];

  return (
    <button
      type="button"
      onClick={() => {
        callbackUpdateData(sortedArr, true);
      }}
    >
      Reset
    </button>
  );
};

import React from 'react';

export const ButtonSortByLength = (props: any) => {
  const { callbackUpdateData, goodsFromServer } = props;
  const sortedArr = [...goodsFromServer]
    .sort((a, b) => b.length - a.length);

  return (
    <button
      type="button"
      onClick={() => callbackUpdateData(sortedArr)}
    >
      ButtonSortByLength
    </button>
  );
};

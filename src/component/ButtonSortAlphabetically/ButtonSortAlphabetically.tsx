import React from 'react';

export const ButtonSortAlphabetically = (props: any) => {
  const { callbackUpdateData, goodsFromServer } = props;
  const sortedArr = [...goodsFromServer].sort((a, b) => a.localeCompare(b));

  return (
    <button
      type="button"
      onClick={() => callbackUpdateData(sortedArr)}
    >
      ButtonSortAlphabetically
    </button>
  );
};

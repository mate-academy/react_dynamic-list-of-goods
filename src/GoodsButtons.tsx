import React from 'react';

import { FilterType } from './types/FilterType';

type Props = {
  onLoadGoods: (filterType: FilterType) => void;
};

const GoodsButtonsComponent = ({ onLoadGoods }: Props) => {
  // eslint-disable-next-line
  console.log('GoodsButtons render');

  return (
    <>
      <button
        data-cy="all-button"
        onClick={() => onLoadGoods('all')}
        type="button"
      >
        Load all goods
      </button>

      <button
        data-cy="first-five-button"
        onClick={() => onLoadGoods('first')}
        type="button"
      >
        Load 5 first goods
      </button>

      <button
        data-cy="red-button"
        onClick={() => onLoadGoods('red')}
        type="button"
      >
        Load red goods
      </button>
    </>
  );
};

export const GoodsButtons = React.memo(GoodsButtonsComponent);

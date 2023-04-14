import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const errorMesageStyle = {
    color: 'red',
    marginLeft: '10px',
  };

  const handleClick = useCallback(
    async (goodsType: () => Promise<Good[]>) => {
      try {
        const goods = await goodsType();

        setVisibleGoods(goods);
      } catch (error) {
        setHasLoadingError(true);
      }
    }, [],
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(getRedGoods)}
      >
        Load red goods
      </button>
      {hasLoadingError
        && <span style={errorMesageStyle}>Error - failed to load goods</span>}

      {visibleGoods.length > 0 && <GoodsList goods={visibleGoods} />}
    </div>
  );
};

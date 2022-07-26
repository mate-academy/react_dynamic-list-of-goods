import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [hasLoadingError, setLoadingError] = useState(false);

  const loadGoods = async (loadGoodCallback: () => Promise<Good[]>) => {
    setLoadingError(false);

    try {
      const goods = await loadGoodCallback();

      setVisibleGoods(goods);
    } catch (error) {
      setLoadingError(true);
    }
  };

  return (
    <div className="App container">
      <h1 className="App__title">
        Dynamic list of Goods
      </h1>

      <div className="App__button">
        <button
          className="btn btn-success"
          type="button"
          data-cy="all-button"
          onClick={() => loadGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          className="btn btn-warning"
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="btn btn-info"
          type="button"
          data-cy="red-button"
          onClick={() => loadGoods(getRedGoods)}
        >
          Load red goods
        </button>
      </div>

      {!hasLoadingError && (
        <GoodsList goods={visibleGoods} />
      )}
    </div>
  );
};

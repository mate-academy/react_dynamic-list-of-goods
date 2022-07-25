import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/scss/bootstrap.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [hasLoadingError, setLoadingError] = useState(false);

  const loadGoods = async (loadType: () => Promise<Good[]>) => {
    setLoadingError(false);
    try {
      const goods = await loadType();

      setVisibleGoods(goods);
    } catch {
      setLoadingError(true);
    }
  };

  return (
    <div className="App container-sm mx-auto">
      <h1 className="text-center">
        Dynamic list of Goods
      </h1>

      <div className="d-flex p-2 bd-highlight justify-content-center">
        <button
          type="button"
          data-cy="all-button"
          onClick={() => loadGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={() => loadGoods(getRedGoods)}
        >
          Load red goods
        </button>
      </div>

      {!hasLoadingError && <GoodsList goods={visibleGoods} />}
    </div>
  );
};

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [hasLoadingError, setLoadingError] = useState(false);

  const loadGoods = async (loadingGoods: () => Promise<Good[]>) => {
    setLoadingError(false);

    try {
      const goods = await loadingGoods();

      setVisibleGoods(goods);
    } catch (error) {
      setLoadingError(true);
    }
  };

  return (
    <nav className="panel">
      <h1 className="panel-heading">
        Dynamic list of Goods
      </h1>
      <p className="panel-tabs">
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
      </p>
      {!hasLoadingError && (
        <GoodsList goods={visibleGoods} />
      )}
    </nav>
  );
};

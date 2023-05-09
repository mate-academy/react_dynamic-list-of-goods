import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGoods = useCallback((method) => {
    method().then(setGoods);
  }, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <button
        type="button"
        data-cy="reset-button"
        onClick={() => setGoods([])}
      >
        Reset
      </button>

      {!goods.length && <div>No goods chosen yet </div>}
      <GoodsList goods={goods} />
    </div>
  );
};

import React, { useMemo, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleGoodsLoad = (callback: () => Promise<Good[]>) => {
    callback()
      .then(setGoods)
      .catch(error => setErrorMessage(error.message));
  };

  const visibleGoods = useMemo(() => {
    return goods;
  }, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoodsLoad(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoodsLoad(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoodsLoad(getRedGoods)}
      >
        Load red goods
      </button>

      {visibleGoods && <GoodsList goods={visibleGoods} />}

      {errorMessage && (
        <p style={{ color: 'red' }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

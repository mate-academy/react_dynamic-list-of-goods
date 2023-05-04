import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const [loadingError, setLoadingError] = useState('');

  const handleGoodsLoad = (callback: () => Promise<Good[]>) => {
    callback()
      .then(goods => setVisibleGoods(goods))
      .catch(error => setLoadingError(error));
  };

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
      {loadingError.length > 0 && (
        <p>
          {`Error on loading - ${loadingError}`}
        </p>
      )}

      {visibleGoods.length > 0
        ? <GoodsList goods={visibleGoods} />
        : (
          <p>
            No goods
          </p>
        )}

    </div>
  );
};

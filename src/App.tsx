import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loadingError, setLoadingError] = useState('');

  const handleFetchGoods = async (getGoods: () => Promise<Good[]>) => {
    try {
      const fetchGoods: Good[] = await getGoods();

      setGoods(fetchGoods);
    } catch (error) {
      setLoadingError('Loading is failed');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleFetchGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleFetchGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleFetchGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {!loadingError
        ? <GoodsList goods={goods} />
        : <div>{loadingError}</div>}
    </div>
  );
};

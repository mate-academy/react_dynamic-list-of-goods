import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState(false);

  const handleLoadData = async (request: () => Promise<Good[]>) => {
    await request()
      .then(data => setGoods(data))
      .catch(() => setError(true));
  };

  const handleLoadDataParams = (getData: () => Promise<Good[]>) => {
    handleLoadData(getData);
    setError(false);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadDataParams(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadDataParams(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadDataParams(getRedGoods)}
      >
        Load red goods
      </button>

      {error && (
        <div className="error">
          Failed to fetch data. Please try again later.
        </div>
      )}

      <GoodsList goods={goods} />
    </div>
  );
};

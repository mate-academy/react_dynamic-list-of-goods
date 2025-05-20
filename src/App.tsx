import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLoadGoods = async (fetchFunction: () => Promise<Good[]>) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const fetchedGoods = await fetchFunction();

      setGoods(fetchedGoods);
    } catch (error) {
      setErrorMessage('Failed to load goods. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      {loading && <p>Loading...</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <GoodsList goods={goods} />
    </div>
  );
};

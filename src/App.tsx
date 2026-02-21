import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadData = async (sortBy: string) => {
    try {
      setError(null);

      let data;

      if (sortBy === 'getFiveFirst') {
        data = await get5First();
      } else if (sortBy === 'getRed') {
        data = await getRedGoods();
      } else {
        data = await getAll();
      }

      setGoods(data);
    } catch (err) {
      setError('Failed to load data. Please try again later.');
      setGoods(null);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadData('getAll')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadData('getFiveFirst')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadData('getRed')}
      >
        Load red goods
      </button>
      {error && <p className="error">{error}</p>}
      {goods && <GoodsList goods={goods} />}
    </div>
  );
};

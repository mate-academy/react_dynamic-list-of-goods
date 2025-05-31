// src/App.tsx

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function to load all goods
  const loadAllGoods = () => {
    getAll().then(fetchedGoods => {
      setGoods(fetchedGoods);
      setError(null); // Clear any previous errors
    });
  };

  // Function to load the first five goods
  const load5FirstGoods = () => {
    get5First().then(fetchedGoods => {
      setGoods(fetchedGoods);
      setError(null); // Clear any previous errors
    });
  };

  // Function to load red goods
  const loadRedGoods = () => {
    getRedGoods().then(fetchedGoods => {
      setGoods(fetchedGoods);
      setError(null); // Clear any previous errors
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {/* Error message if there's an error */}
      {error && <div className="error-message">{error}</div>}

      <button type="button" data-cy="all-button" onClick={loadAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={load5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRedGoods}>
        Load red goods
      </button>

      {/* Pass actual goods to GoodsList */}
      <GoodsList goods={goods} />
    </div>
  );
};

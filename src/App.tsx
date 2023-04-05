import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isError, setError] = useState(false);

  const dataLoading = async (data: Promise<Good[]>) => {
    setError(false);
    try {
      const currentGoods = await data;

      setGoods(currentGoods);
    } catch (err) {
      setError(true);
    }
  };

  const handleGetAll = () => {
    dataLoading(getAll());
  };

  const handleGet5First = () => {
    dataLoading(get5First());
  };

  const handleGetRedGoods = () => {
    dataLoading(getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoods}
      >
        Load red goods
      </button>

      {isError && <span>Hello</span>}
      <GoodsList goods={goods} />
    </div>
  );
};

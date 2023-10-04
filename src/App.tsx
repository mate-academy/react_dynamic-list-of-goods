import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);

  useEffect(() => { }, [goods]);

  function handleGetAll() {
    getAll()
      .then(setGoods);
  }

  function handleGetFirstFive() {
    get5First()
      .then(setGoods);
  }

  function handleGetRed() {
    getRedGoods()
      .then(setGoods);
  }

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
        onClick={handleGetFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRed}
      >
        Load red goods
      </button>

      {goods && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};

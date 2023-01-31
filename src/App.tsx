import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodList, setGoodList] = useState<Good[]>([]);

  useEffect(() => {
    getAll()
      .then(data => {
        setGoodList(data);
      });
  }, []);

  const setAll = () => (
    getAll().then(data => setGoodList(data))
  );

  const setFiveFirst = () => (
    get5First().then(data => setGoodList(data))
  );

  const setReds = () => (
    getRedGoods().then(data => setGoodList(data))
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={setAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={setFiveFirst}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={setReds}
      >
        Load red goods
      </button>

      <GoodsList goods={goodList} />
    </div>
  );
};

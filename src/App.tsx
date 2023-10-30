import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [all, setAll] = useState(false);
  const [first5, setFirst5] = useState(false);
  const [red, setRed] = useState(false);

  const handleAll = () => {
    setAll(true);
    setFirst5(false);
    setRed(false);
  };

  const handle5First = () => {
    setAll(false);
    setFirst5(true);
    setRed(false);
  };

  const handleRed = () => {
    setAll(false);
    setFirst5(false);
    setRed(true);
  };

  useEffect(() => {
    if (all) {
      getAll().then(setGoods);
    }

    if (first5) {
      get5First().then(setGoods);
    }

    if (red) {
      getRedGoods().then(setGoods);
    }
  }, [all, first5, red]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRed}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

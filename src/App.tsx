import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';
import { FILTER } from './filters/filter';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAll()
      .then(setGoods)
      .catch((err => setError(err.message)));
  }, []);

  const { all, five, red } = FILTER;

  const fetchGoods = (name: string) => {
    if (name === all) {
      getAll()
        .then(setGoods)
        .catch(err => setError(err.message));
    } else if (name === five) {
      get5First()
        .then(setGoods)
        .catch(err => setError(err.message));
    } else {
      getRed()
        .then(setGoods)
        .catch(err => setError(err.message));
    }
  };


  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => fetchGoods(all)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => fetchGoods(five)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => fetchGoods(red)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
      <span style={{ color: 'red' }}>{error}</span>
    </div>
  );
};

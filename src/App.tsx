import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

const enum Fetches {
  All = 'All',
  Five = 'Five',
  Red = 'Red',
}

interface Good {
  id: number,
  name: string,
  color: string,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [fetch, setFetch] = useState('');

  useEffect(() => {
    switch (fetch) {
      case Fetches.All:
        getAll().then(setGoods);
        break;

      case Fetches.Five:
        get5First().then(setGoods);
        break;

      case Fetches.Red:
        getRedGoods().then(setGoods);
        break;

      default:
        setGoods([]);
    }
  }, [fetch]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setFetch(Fetches.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setFetch(Fetches.Five)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setFetch(Fetches.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

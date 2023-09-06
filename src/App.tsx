import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Status } from './types/Status';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    switch (status) {
      case (Status.All):
        getAll().then(setGoods);
        break;
      case (Status.First5):
        get5First().then(setGoods);
        break;
      case (Status.OnlyRed):
        getRedGoods().then(setGoods);
        break;
      default:
        break;
    }
  }, [status]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setStatus(Status.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setStatus(Status.First5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setStatus(Status.OnlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

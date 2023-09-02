import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Status } from './types/Status';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (status === Status.All) {
      getAll().then(setGoods);
    }

    if (status === Status.First5) {
      get5First().then(setGoods);
    }

    if (status === Status.JustRed) {
      getRedGoods().then(setGoods);
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
        onClick={() => setStatus(Status.JustRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

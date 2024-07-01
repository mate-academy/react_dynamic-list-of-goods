import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [userFromServer, setUserFromServer] = useState('');

  useEffect(() => {
    if (userFromServer === 'all') {
      getAll().then(setGoods);
    }

    if (userFromServer === 'get5First') {
      get5First().then(setGoods);
    }

    if (userFromServer === 'getRedGoods') {
      getRedGoods().then(setGoods);
    }
  }, [userFromServer]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setUserFromServer('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setUserFromServer('get5First')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setUserFromServer('getRedGoods')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

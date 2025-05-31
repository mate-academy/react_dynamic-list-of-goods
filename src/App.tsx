import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [typeField, setTypeField] = useState('');

  useEffect(() => {
    if (!typeField) {
      return;
    }

    if (typeField === 'all') {
      getAll().then(setGoods);
    }

    if (typeField === 'get5First') {
      get5First().then(setGoods);
    }

    if (typeField === 'getRedGoods') {
      getRedGoods().then(setGoods);
    }
  }, [typeField]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => setTypeField('all')}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => setTypeField('get5First')}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => setTypeField('getRedGoods')}
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

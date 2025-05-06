import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll } from './api/goods';
import { get5First } from './api/goods';
import { getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [Goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(data => setGoods(data))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(res => setGoods(res))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(res => setGoods(res))}
      >
        Load red goods
      </button>

      <GoodsList goods={Goods} />
    </div>
  );
};

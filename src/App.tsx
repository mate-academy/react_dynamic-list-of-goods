import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [listFromServer, setListFromServer] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(data => setListFromServer(data))}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(data => setListFromServer(data))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRedGoods().then(data => setListFromServer(data))}
      >
        Load red goods
      </button>

      <GoodsList goods={listFromServer} />
    </div>
  );
};

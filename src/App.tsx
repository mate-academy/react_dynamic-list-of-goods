import React, { useState } from 'react';

import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={async () => setGoods(await getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => setGoods(await get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => setGoods(await getRedGoods())}
      >
        Load red goods
      </button>

      {goods && (
        <GoodsList
          goods={goods}
        />
      )}
    </div>
  );
};

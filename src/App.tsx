import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [dataFromServer, SetDataFromServer] = useState<Good[]>([]);

  async function loadGoods(loader: () => Promise<Good[]>): Promise<void> {
    const res = await loader();

    SetDataFromServer(res);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        onClick={() => loadGoods(getAll)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>
      <button
        onClick={() => loadGoods(get5First)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => loadGoods(getRedGoods)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={dataFromServer} />
    </div>
  );
};

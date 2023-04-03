import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App container mt-4">
      <h1 className="text-center mb-4">Dynamic list of Goods</h1>

      <div className="d-flex justify-content-center mb-4">
        <button
          type="button"
          className="btn btn-dark"
          data-cy="all-button"
          onClick={async () => setGoods(await getAll())}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="btn btn-dark mx-3"
          data-cy="first-five-button"
          onClick={async () => setGoods(await get5First())}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="btn btn-dark"
          data-cy="red-button"
          onClick={async () => setGoods(await getRedGoods())}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App content is-medium">
      <h1>Dynamic list of Goods</h1>

      <button
        className="button is-primary"
        type="button"
        data-cy="all-button"
        onClick={async () => setGoods(await getAll())}
      >
        Load all goods
      </button>

      <button
        className="button is-info"
        type="button"
        data-cy="first-five-button"
        onClick={async () => setGoods(await get5First())}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-danger"
        type="button"
        data-cy="red-button"
        onClick={async () => setGoods(await getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1 className="App__title">
        Dynamic list of Goods
      </h1>

      <button
        className="App__btn btn btn-primary"
        type="button"
        data-cy="all-button"
        onClick={async () => setGoods(await getAll())}
      >
        Load all goods
      </button>

      <button
        className="App__btn btn btn-success"
        type="button"
        data-cy="first-five-button"
        onClick={async () => setGoods(await get5First())}
      >
        Load 5 first goods
      </button>

      <button
        className="App__btn btn btn-danger"
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

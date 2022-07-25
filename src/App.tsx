import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button button__load-all"
        onClick={async () => setGoods(await getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button button__load-first_5"
        onClick={async () => setGoods(await get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button button__load-with_red_color"
        onClick={async () => setGoods(await getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  return (
    <div className="App container box is-centered">
      <h1 className="title">Dynamic list of Goods</h1>
      <div className="buttons">
        <button
          type="button"
          data-cy="all-button"
          onClick={async () => setGoodsList(await getAll())}
          className="button"
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={async () => setGoodsList(await get5First())}
          className="button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={async () => setGoodsList(await getRedGoods())}
          className="button"
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={goodsList} />
    </div>
  );
};

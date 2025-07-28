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
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {/* On Click, recieve corresponding data. */}
      <button
        type="button"
        data-cy="all-button"
        onClick={async () => {
          const data = await getAll();

          setGoodsList(data);
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          const data = await get5First();

          setGoodsList(data);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => {
          const data = await getRedGoods();

          setGoodsList(data);
        }}
      >
        Load red goods
      </button>

      {/* Pass array of goods here */}
      <GoodsList goods={goodsList} />
    </div>
  );
};

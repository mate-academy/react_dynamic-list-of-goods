import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [currentGoods, setCurrentGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={async () => {
          setCurrentGoods(await getAll());
        }}
      >
        getAll
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          setCurrentGoods(await get5First());
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => {
          setCurrentGoods(await getRedGoods());
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={currentGoods} />
    </div>
  );
};

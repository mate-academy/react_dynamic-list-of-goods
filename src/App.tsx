import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App = () => {
  const [listGoods, setListGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => {
          getAll().then(a => setListGoods(a));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => {
          get5First().then(a => setListGoods(a));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => {
          getRedGoods().then(a => setListGoods(a));
        }}
      >
        Load red goods
      </button>
      {listGoods.length > 0 && <GoodsList goods={listGoods} />}
    </div>
  );
};

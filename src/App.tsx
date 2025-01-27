import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  // useEffect(() => {
  //   getAll().then(data => setGoods(data));
  // }, []);

  // const loafingGetAll = () => {
  //   getAll().then(data => setGoods(data));
  // };

  // const loadingGet5First = () => {
  //   get5First().then(data => setGoods(data));
  // };

  const loadGoods = (fetchFunction: () => Promise<Good[]>) => {
    fetchFunction().then(data => setGoods(data));
  };

  // useEffect(() => {
  //   loadGoods(getAll);
  //   loadGoods(get5First);
  //   loadGoods(getRedGoods);
  // }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

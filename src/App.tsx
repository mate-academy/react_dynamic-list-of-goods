import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { WhichGoods } from './types/WhichGoods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [whichGoods, setWhichGoods] = useState(WhichGoods.Default);

  useEffect(() => {
    if (whichGoods === WhichGoods.All) {
      getAll().then(setGoods);
    }

    if (whichGoods === WhichGoods.SortFirstFive) {
      get5First().then(setGoods);
    }

    if (whichGoods === WhichGoods.ByColor) {
      getRedGoods().then(setGoods);
    }
  }, [whichGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setWhichGoods(WhichGoods.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setWhichGoods(WhichGoods.SortFirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setWhichGoods(WhichGoods.ByColor)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

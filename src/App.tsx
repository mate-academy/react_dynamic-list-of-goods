import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum LoadVariations {
  none = 0,
  all = 1,
  firstFive = 2,
  red = 3,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [lastLoad, setLastLoad] = useState(LoadVariations.none);

  useEffect(() => {
    if (lastLoad === LoadVariations.all) {
      getAll().then(result => setGoods(result));

      return;
    }

    if (lastLoad === LoadVariations.firstFive) {
      get5First().then(result => setGoods(result));

      return;
    }

    if (lastLoad === LoadVariations.red) {
      getRedGoods().then(result => setGoods(result));

      return;
    }
  }, [lastLoad]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setLastLoad(LoadVariations.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setLastLoad(LoadVariations.firstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setLastLoad(LoadVariations.red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

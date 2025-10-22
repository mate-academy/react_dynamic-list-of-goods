import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

enum LoadType {
  All,
  FirstFive,
  Red,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoad = (loadType: LoadType) => {
    let promise: Promise<Good[]>;

    switch (loadType) {
      case LoadType.All:
        promise = getAll();
        break;
      case LoadType.FirstFive:
        promise = get5First();
        break;
      case LoadType.Red:
        promise = getRedGoods();
        break;
    }

    promise
      .then(goodsFromServer => setGoods(goodsFromServer))
      .catch(() => setGoods([]));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoad(LoadType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoad(LoadType.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoad(LoadType.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

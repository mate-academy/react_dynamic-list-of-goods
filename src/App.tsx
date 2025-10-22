import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, getFirstFiveGoods, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export enum LoadType {
  All,
  FirstFive,
  Red,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadGoodsBy = (loadType: LoadType) => {
    let promise: Promise<Good[]>;

    switch (loadType) {
      case LoadType.All:
        promise = getAll();
        break;
      case LoadType.FirstFive:
        promise = getFirstFiveGoods();
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
        onClick={() => handleLoadGoodsBy(LoadType.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadGoodsBy(LoadType.FirstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadGoodsBy(LoadType.Red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

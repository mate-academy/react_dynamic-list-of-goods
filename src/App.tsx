import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isShowAllGoods, setIsShowGoods] = useState(false);
  const [isShowFiveGoods, setIsShowFiveGoods] = useState(false);
  const [isShowRedGoods, setIsShowRedGoods] = useState(false);

  useEffect(() => {
    if (isShowAllGoods) {
      getAll()
        .then(setGoods)
        .catch((e) => {
          throw new Error(e);
        });
    }

    if (isShowFiveGoods) {
      get5First()
        .then(setGoods)
        .catch((e) => {
          throw new Error(e);
        });
    }

    if (isShowRedGoods) {
      getRedGoods()
        .then(setGoods)
        .catch((e) => {
          throw new Error(e);
        });
    }

    setIsShowGoods(false);
    setIsShowFiveGoods(false);
    setIsShowRedGoods(false);
  }, [isShowAllGoods, isShowFiveGoods, isShowRedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setIsShowGoods(true)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setIsShowFiveGoods(true)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setIsShowRedGoods(true)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

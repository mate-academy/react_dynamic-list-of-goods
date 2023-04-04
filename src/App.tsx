import React, { useState, useCallback } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
import { Loader } from './components/GoodList/Loader';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = useCallback(async () => {
    const goodsFromServer = await getAll();

    setGoods(goodsFromServer);
  }, []);

  const handleLoad5FirstGoods = useCallback(async () => {
    const goodsFromServer = await get5First();

    setGoods(goodsFromServer);
  }, []);

  const handleLoadOnlyRed = useCallback(async () => {
    const goodsFromServer = await getRedGoods();

    setGoods(goodsFromServer);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Dynamic list of Goods</h1>

        <div className="buttons is-centered">
          <button
            className="button is-primary is-outlined"
            type="button"
            data-cy="all-button"
            onClick={handleLoadAll}
          >
            Load all goods
          </button>

          <button
            className="button is-primary is-outlined"
            type="button"
            data-cy="first-five-button"
            onClick={handleLoad5FirstGoods}
          >
            Load 5 first goods
          </button>

          <button
            className="button is-primary is-outlined"
            type="button"
            data-cy="red-button"
            onClick={handleLoadOnlyRed}
          >
            Load red goods
          </button>
        </div>

        <GoodsList goods={goods} />

        <Loader />
      </div>
    </div>
  );
};

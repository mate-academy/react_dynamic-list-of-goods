/* eslint-disable no-console */
import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = useCallback(() => {
    goodsAPI.getAll()
      .then(data => setGoods(data))
      .catch((err) => console.log(`Something went wrong ${err}`));
  }, [goods]);

  const handleGet5First = useCallback(() => {
    goodsAPI.get5First()
      .then(setGoods)
      .catch((err) => console.log(`Something went wrong ${err}`));
  }, [goods]);

  const handleGetRedGoods = useCallback(() => {
    goodsAPI.getRedGoods()
      .then(setGoods)
      .catch((err) => console.log(`Something went wrong ${err}`));
  }, [goods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

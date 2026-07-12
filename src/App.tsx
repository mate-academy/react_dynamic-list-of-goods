import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = useCallback(() => {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => setGoods([]));
  }, []);

  const handleLoad5First = useCallback(() => {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => setGoods([]));
  }, []);

  const handleLoadRedGoods = useCallback(() => {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => setGoods([]));
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

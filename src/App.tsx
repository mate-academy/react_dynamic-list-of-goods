import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (promise: Promise<Good[]>) => {
    setHasError(false);
    promise.then(setGoods).catch(() => setHasError(true));
  };

  const loadAll = () => handleLoad(goodsAPI.getAll());
  const load5First = () => handleLoad(goodsAPI.get5First());
  const loadRed = () => handleLoad(goodsAPI.getRedGoods());

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {hasError && <p style={{ color: 'red' }}>Something went wrong</p>}

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={load5First}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

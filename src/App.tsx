import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = () => {
    goodsAPI
      .getAll()
      .then(setGoods)
      .catch(() => {});
  };

  const handleLoadFirstFive = () => {
    goodsAPI
      .get5First()
      .then(setGoods)
      .catch(() => {});
  };

  const handleLoadRed = () => {
    goodsAPI
      .getRedGoods()
      .then(setGoods)
      .catch(() => {});
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoadFirstFive}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

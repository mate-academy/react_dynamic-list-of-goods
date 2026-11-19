import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [showGoods, setShowGoods] = useState<Good[]>([]);

  const handleShowAllGoods = () => {
    goodsAPI
      .getAll()
      .then(allGoods => {
        setShowGoods(allGoods);
      })

  };

  const handleShowFiveGoods = () => {
    goodsAPI
      .get5First()
      .then(allGoods => {
        setShowGoods(allGoods);
      })

  };

  const handleShowRedGoods = () => {
    goodsAPI
      .getRedGoods()
      .then(allGoods => {
        setShowGoods(allGoods);
      })

  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleShowAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleShowFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleShowRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={showGoods} />
    </div>
  );
};

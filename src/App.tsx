import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = React.memo(() => {
  const [showGoods, setShowGoods] = useState<Good[]>([]);

  const handleShowGoods = () => {
    goodsAPI.getAll().then(allGoods => {
      setShowGoods(allGoods);
    });
  };

  const handleShowFive = () => {
    goodsAPI.get5First().then(allGoods => {
      setShowGoods(allGoods);
    });
  };

  const handleShowRed = () => {
    goodsAPI.getRedGoods().then(allGoods => {
      setShowGoods(allGoods);
    });
  };

return (
  <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button type="button" data-cy="all-button" onClick={handleShowGoods}>
      Load all goods
    </button>

    <button
      type="button"
      data-cy="first-five-button"
      onClick={handleShowFive}
    >
      Load 5 first goods
    </button>

    <button type="button" data-cy="red-button" onClick={handleShowRed}>
      Load red goods
    </button>

    <GoodsList goods={showGoods} />
  </div>
);
});

// App.tsx
App.displayName = 'App';

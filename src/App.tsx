import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleSetAllData = () => {
    return getAll().then(setVisibleGoods);
  };

  const handleSetFirst5 = () => {
    return get5First().then(setVisibleGoods);
  };

  const handleSetRed = () => {
    return getRedGoods().then(setVisibleGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleSetAllData}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleSetFirst5}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleSetRed}>
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

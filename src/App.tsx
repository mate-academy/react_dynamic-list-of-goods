import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleLoadButtonClick = async (callback: Promise<Good[]>) => {
    setVisibleGoods(await callback);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleLoadButtonClick(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleLoadButtonClick(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleLoadButtonClick(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

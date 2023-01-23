import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';

import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsToShow, setGoodsToShow] = useState<Good[]>([]);

  const handleSelectButton = async (callback: Promise<Good[]>) => (
    setGoodsToShow(await callback)
  );

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        className="button"
        onClick={() => handleSelectButton(getAll())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        className="button"
        onClick={() => handleSelectButton(get5First())}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        className="button"
        onClick={() => handleSelectButton(getRedGoods())}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsToShow} />
    </div>
  );
};

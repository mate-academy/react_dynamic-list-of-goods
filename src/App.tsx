import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);

  const handleCLick = async (callback: () => Promise<Good[]>) => {
    const visibleGoods = await callback();

    return setGoodsFromServer(visibleGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleCLick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goodsFromServer} />
    </div>
  );
};

import React, { useState } from 'react';
import * as goodsAPI from './api/goods';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import './App.scss';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGoodsLoading = async (loadFunc: () => Promise<Good[]>) => {
    const loadedGoods = await loadFunc();

    setGoods(loadedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGoodsLoading(goodsAPI.getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGoodsLoading(goodsAPI.get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGoodsLoading(goodsAPI.getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

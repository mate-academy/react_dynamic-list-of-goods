import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const handleLoadAllGoodsClick = async () => setGoods(await getAll());
  const handleLoad5FirstGoodsClick = async () => setGoods(await get5First());
  const handleLoadRedGoodsClick = async () => setGoods(await getRedGoods());

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAllGoodsClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5FirstGoodsClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRedGoodsClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

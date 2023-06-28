import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleAllGoodsClick = async () => {
    const response = await getAll();

    setVisibleGoods(response);
  };

  const handle5FirstGoodsClick = async () => {
    const response = await get5First();

    setVisibleGoods(response);
  };

  const handleRedGoodsClick = async () => {
    const response = await getRedGoods();

    setVisibleGoods(response);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstGoodsClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoodsClick}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

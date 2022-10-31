import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsToShow, setGoodsToShow] = useState<Good[]>([]);

  const handleAllClick = async () => {
    try {
      setGoodsToShow(await getAll());
    } catch {
      throw new Error('Sorry, something went wrong :(');
    }
  };

  const handle5FirstClick = async () => {
    try {
      setGoodsToShow(await get5First());
    } catch {
      throw new Error('Sorry, something went wrong :(');
    }
  };

  const handleRedClick = async () => {
    try {
      setGoodsToShow(await getRedGoods());
    } catch {
      throw new Error('Sorry, something went wrong :(');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsToShow} />
    </div>
  );
};

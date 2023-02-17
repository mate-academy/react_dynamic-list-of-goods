import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.css';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [cathError, setCathError] = useState(false);
  const handleAllGoodsButton = async () => {
    try {
      const goodsFromServer = await getAll();

      setCathError(false);
      setGoods(goodsFromServer);
    } catch {
      setCathError(true);
    }
  };

  const handleFirstFiveGoodsButton = async () => {
    try {
      const goodsFromServer = await get5First();

      setCathError(false);
      setGoods(goodsFromServer);
    } catch {
      setCathError(true);
    }
  };

  const handleRedGoodsButton = async () => {
    try {
      const goodsFromServer = await getRedGoods();

      setCathError(false);
      setGoods(goodsFromServer);
    } catch {
      setCathError(true);
    }
  };

  return (
    <div className="App section">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsButton}
      >
        Load all goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveGoodsButton}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={handleRedGoodsButton}
      >
        Load red goods
      </button>

      {cathError
        ? <p>Could`t load data from server</p>
        : <GoodsList goods={goods} />}
    </div>
  );
};

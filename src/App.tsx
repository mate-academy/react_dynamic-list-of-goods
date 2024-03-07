import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [shownGoods, setShownGoods] = useState<Good[]>([]);
  const [receivedGoods, setReceivedGoods] = useState<Good[]>([]);

  const handleFull = async () => {
    const goods = await goodsAPI.getAll();

    setReceivedGoods(goods);
  };

  const handleFive = async () => {
    const goods = await goodsAPI.get5First();

    setReceivedGoods(goods);
  };

  const handleRed = async () => {
    const goods = await goodsAPI.getRedGoods();

    setReceivedGoods(goods);
  };

  useEffect(() => {
    setShownGoods(receivedGoods);
  }, [receivedGoods]);

  useEffect(() => {
    handleFull();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleFull}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRed}>
        Load red goods
      </button>

      <GoodsList goods={shownGoods} />
    </div>
  );
};

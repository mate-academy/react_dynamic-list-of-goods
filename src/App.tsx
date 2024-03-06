import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [shownGoods, setShownGoods] = useState<Good[]>([]);
  let receivedGoods = [];

  const handleFull = async () => {
    receivedGoods = await goodsAPI.getAll();
    setShownGoods(receivedGoods);
  };

  const handleFive = async () => {
    receivedGoods = await goodsAPI.get5First();
    setShownGoods(receivedGoods);
  };

  const handleRed = async () => {
    receivedGoods = await goodsAPI.getRedGoods();
    setShownGoods(receivedGoods);
  };

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

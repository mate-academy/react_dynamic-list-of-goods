import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAll = async () => {
    goodsAPI.getAll().then(fetchedGoods => {
      setGoods(fetchedGoods);
    });
  };

  const handleGet5First = async () => {
    goodsAPI.get5First().then(fetchedGoods => {
      setGoods(fetchedGoods);
    });
  };

  const handleGetRed = async () => {
    goodsAPI.getRedGoods().then(fetchedGoods => {
      setGoods(fetchedGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleGetAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleGetRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

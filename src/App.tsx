import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// import { getAll, get5First, getRed } from './api/goods';
// or
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [listGoods, setListGoods] = useState<Good[]>([]);

  const requestAll = async () => {
    const response = await goodsAPI.getAll();

    if (response) {
      setListGoods(response);
    }
  };

  const requestFirstFive = async () => {
    const response = await goodsAPI.get5First();

    if (response) {
      setListGoods(response);
    }
  };

  const requestRedGoods = async () => {
    const response = await goodsAPI.getRedGoods();

    if (response) {
      setListGoods(response);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={requestAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={requestFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={requestRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={listGoods} />
    </div>
  );
};

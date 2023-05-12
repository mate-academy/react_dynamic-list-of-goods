import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  const { getAll, get5First, getRedGoods } = goodsAPI;
  const [error, setError] = useState('');

  const handlingGetGoods = async (apiMethod: () => Promise<Good[]>) => {
    try {
      const goods = await apiMethod();

      setVisibleGoods(goods);
    } catch (fail) {
      setError('Failed to fetch goods');
    }
  };

  const handlingGetAllGoods = async () => {
    await handlingGetGoods(getAll);
  };

  const handlingGetFirstFiveGoods = async () => {
    await handlingGetGoods(get5First);
  };

  const handlingGetRedGoods = async () => {
    await handlingGetGoods(getRedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handlingGetAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlingGetFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handlingGetRedGoods}
      >
        Load red goods
      </button>

      {error && <p>{error}</p>}

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

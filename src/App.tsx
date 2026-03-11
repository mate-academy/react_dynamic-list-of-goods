import React, { useEffect, useState } from 'react';
import './App.scss';

import GoodsList from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const fetchAllGoods = async () => {
    try {
      const data = await getAll();

      setGoods(data);
    } catch {
      setGoods([]);
    }
  };

  const fetch5Goods = async () => {
    try {
      const data = await get5First();

      setGoods(data);
    } catch {
      setGoods([]);
    }
  };

  const fetchRedGoods = async () => {
    try {
      const data = await getRedGoods();

      setGoods(data);
    } catch {
      setGoods([]);
    }
  };

  useEffect(() => {
    fetchAllGoods();
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={fetchAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={fetch5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={fetchRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

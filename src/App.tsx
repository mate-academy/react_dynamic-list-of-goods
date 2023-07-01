import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<{
    all: Good[],
    getFirst: Good[],
    getRed: Good[],
  }>({
    all: [],
    getFirst: [],
    getRed: [],
  });
  const [visibleGoodsList, setVisibleGoodsList] = useState<Good[]>([]);

  const loadData = async () => {
    const all = await getAll();
    const getFirst = await get5First();
    const getRed = await getRedGoods();

    setGoodsList({ all, getFirst, getRed });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setVisibleGoodsList(goodsList.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setVisibleGoodsList(goodsList.getFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setVisibleGoodsList(goodsList.getRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoodsList} />
    </div>
  );
};

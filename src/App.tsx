import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll } from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);
  const [visibleGoodsList, setVisibleGoodsList] = useState<Good[]>([]);
  const loadData = async () => {
    const all = await getAll();

    setGoodsList(all);
  };

  const getFirst = () => {
    return [...goodsList]
      .sort((a, b) => a.name.localeCompare(b.name))
      .slice(0, 5);
  };

  const getRed = () => {
    return [...goodsList].filter(el => el.color === 'red');
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
        onClick={() => setVisibleGoodsList(goodsList)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setVisibleGoodsList(getFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setVisibleGoodsList(getRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoodsList} />
    </div>
  );
};

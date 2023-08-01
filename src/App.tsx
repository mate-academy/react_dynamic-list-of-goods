import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  useEffect(() => {
    getAll().then(goods => {
      setAllGoods(goods);
    });
  }, []);

  const handleLoadAllGoods = () => {
    getAll().then(goods => {
      setAllGoods(goods);
    });
  };

  const handleLoad5FirstGoods = () => {
    get5First().then(goods => {
      setAllGoods(goods);
    });
  };

  const handleLoadRedGoods = () => {
    getRedGoods().then(goods => {
      setAllGoods(goods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleLoadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleLoadRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};

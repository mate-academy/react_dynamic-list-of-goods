import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [func, setFunc] = useState<(() => Promise<Good[]>) | null>(null);

  useEffect(() => {
    if (!func) {
      return;
    }

    const loadGoods = async () => {
      try {
        const goodsArr = await func();

        setGoods(goodsArr);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    loadGoods();
  }, [func]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => setFunc(() => getAll)}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => setFunc(() => get5First)}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => setFunc(() => getRedGoods)}
        data-cy="red-button"
      >
        Load red goods
      </button>

      {goods ? <GoodsList goods={goods} /> : <p>No Goods</p>}
    </div>
  );
};

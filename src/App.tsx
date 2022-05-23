import React, { useState } from 'react';
import './App.scss';
import { get5First, getAll, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList/GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = async (request: () => Promise<Good[]>) => {
    const newItem = await request();

    setGoods(newItem);
  };

  if (!goods) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1 className="app__title">Dynamic list of Goods</h1>
      <div className="buttons">
        <button
          type="button"
          onClick={() => loadGoods(getAll)}
          className="button"
        >
          Load All goods
        </button>
        <button
          type="button"
          onClick={() => loadGoods(get5First)}
          className="button"
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          onClick={() => loadGoods(getRedGoods)}
          className="button"
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

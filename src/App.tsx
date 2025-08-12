import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleLoadAll = async () => {
    const allGoods = await getAll();

    setGoods(allGoods);
  };

  const handleLoad5First = async () => {
    const first5Goods = await get5First();

    setGoods(first5Goods);
  };

  const handleLoadRed = async () => {
    const redGoods = await getRedGoods();

    setGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleLoadAll}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleLoad5First}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleLoadRed}>
        Load red goods
      </button>

      <ul>
        {goods.map(good => (
          <li key={good.id} style={{ color: good.color }}>
            {good.name}
          </li>
        ))}
      </ul>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;

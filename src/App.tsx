import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClick = async (loadedGoods: Promise<Good[]>) => (
    setGoods(await loadedGoods));

  return (

    <div className="App">
      <h1>Dynamic List of Goods</h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={() => handleClick(goodsAPI.getAll())}
      >
        Load All Goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClick(goodsAPI.get5First())}
      >
        Load 5 First Goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={() => handleClick(goodsAPI.getRedGoods())}
      >
        Load Red Goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

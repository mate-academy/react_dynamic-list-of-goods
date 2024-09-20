import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getGoodsFromServer } from './servises/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getPreparedGoods = (func: string) => {
    return getGoodsFromServer(func).then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getPreparedGoods('getAll')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getPreparedGoods('get5First')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getPreparedGoods('getRed')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

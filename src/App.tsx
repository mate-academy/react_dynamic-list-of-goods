import React, { useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const getAllHandler = () => {
    return getAll().then((goods) => {
      setVisibleGoods(goods);
    });
  };

  const getFiveHandler = () => {
    return get5First().then((goods) => setVisibleGoods(goods));
  };

  const getRedHandler = () => {
    return getRedGoods().then((goods) => setVisibleGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button 
        type="button" 
        data-cy="all-button" 
        onClick={getAllHandler}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFiveHandler}
      >
        Load 5 first goods
      </button>

      <button 
        type="button" 
        data-cy="red-button" 
        onClick={getRedHandler}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

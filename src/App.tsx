import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {

  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);
  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={() => getAll().then(goods => setVisibleGoods(goods))} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={() => get5First().then(goods => setVisibleGoods(goods))} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={() => getRedGoods().then(goods => setVisibleGoods(goods))} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
}

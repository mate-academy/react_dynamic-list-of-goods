import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const fetchAll = () => (
    getAll()
      .then((goods => setVisibleGoods(goods)))
      .catch(() => 'There no goods'));

  const fetch5First = () => (
    get5First()
      .then((goods => setVisibleGoods(goods)))
      .catch(() => 'There no goods'));

  const fetchRed = () => (
    getRedGoods()
      .then(goods => setVisibleGoods(goods))
      .catch(() => 'There no red goods'));

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={fetchAll}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={fetch5First}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={fetchRed}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

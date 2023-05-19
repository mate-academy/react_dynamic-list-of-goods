import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const fetchAll = () => (
    getAll()
      .then((setVisibleGoods))
      .catch(() => 'An error occured when loading goods'));

  const fetch5First = () => (
    get5First()
      .then((setVisibleGoods))
      .catch(() => 'An error occured when loading goods'));

  const fetchRed = () => (
    getRedGoods()
      .then(setVisibleGoods)
      .catch(() => 'An error occured when loading goods'));

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

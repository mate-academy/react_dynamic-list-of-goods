import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [showAllGoods, setShowAllGoods] = useState(false);
  const [show5Goods, setShow5Goods] = useState(false);
  const [showRedGoods, setShowRedGoods] = useState(false);

  useEffect(() => {
    if (showAllGoods) {
      getAll()
        .then(setGoods);
    }

    if (show5Goods) {
      get5First()
        .then(setGoods);
    }

    if (showRedGoods) {
      getRedGoods()
        .then(setGoods);
    }

    setShowAllGoods(false);
    setShow5Goods(false);
    setShowRedGoods(false);
  }, [showAllGoods, show5Goods, showRedGoods]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setShowAllGoods(true)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setShow5Goods(true)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setShowRedGoods(true)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

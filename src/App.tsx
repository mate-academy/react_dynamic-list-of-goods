import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAllGoods, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [showGoods, setShowGoods] = useState<Good[]>([]);

  const showAllGoods = () => {
    getAllGoods()
      .then(goods => {
        setShowGoods(goods);
      });
  };

  const show5FirstGoods = () => {
    get5First()
      .then(goods => {
        setShowGoods(goods);
      });
  };

  const showRedGoods = () => {
    getRedGoods()
      .then((goods: Good[]) => {
        setShowGoods(goods);
      });
  };

  return (
    <div>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={showAllGoods}
      >
        all
      </button>

      <button
        type="button"
        onClick={show5FirstGoods}
      >
        5
      </button>

      <button
        type="button"
        onClick={showRedGoods}
      >
        red
      </button>

      <GoodsList goods={showGoods} />
    </div>
  );
};

import React, { useState } from 'react';
import { GoodsList } from './components/Goodslist';
import './App.scss';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [displayGoods, goodsSet] = useState<Good[]>([]);

  const showAllGoods = () => {
    getAll()
      .then(goods => {
        goodsSet(goods);
      });
  };

  const show5First = () => {
    get5First()
      .then(goods => {
        goodsSet(goods);
      });
  };

  const showRedGoods = () => {
    getRedGoods()
      .then((goods: Good[]) => {
        goodsSet(goods);
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
        onClick={show5First}
      >
        5
      </button>

      <button
        type="button"
        onClick={showRedGoods}
      >
        red
      </button>

      <GoodsList goods={displayGoods} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

import { getGoods, Good } from './components/api';
import GoodsList from './components/GoodList';

const App = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getGoods()
      .then(setGoods);
  };

  const loadRedGoods = () => {
    const getRedGoods = (goodsFromServer: Good[]) => {
      return goodsFromServer.filter(good => good.color === 'red');
    };

    getGoods()
      .then(getRedGoods)
      .then(setGoods);
  };

  const loadFirst5Goods = () => {
    const getFirst5 = (goodsFromServer: Good[]) => {
      return goodsFromServer.slice(0, 5);
    };

    const sortGoodsByName = (goodsFromServer: Good[]) => {
      return [...goodsFromServer].sort(
        (a, b) => a.name.localeCompare(b.name),
      );
    };

    getGoods()
      .then(sortGoodsByName)
      .then(getFirst5)
      .then(setGoods);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAllGoods}>Load all</button>
      <button type="button" onClick={loadRedGoods}>Load red</button>
      <button type="button" onClick={loadFirst5Goods}>Load 5 first</button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;

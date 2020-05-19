import React, { useState } from 'react';
import './App.css';

import { getGoods, Good } from './api';
import GoodsList from './GoodsList';

const App = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    getGoods()
      .then(setGoods);
  };

  const loadRedGoods = () => {
    getGoods()
      .then(goodsFromServer => goodsFromServer
        .filter(good => good.color === 'red'))
      .then(setGoods);
  };

  const loadFirst5Goods = () => {
    const sortGoodsByName = (goodsFromServer: Good[]) => {
      return [...goodsFromServer]
        .sort((a, b) => a.name.localeCompare(b.name));
    };

    getGoods()
      .then(sortGoodsByName)
      .then((goodsFromServer: Good[]) => goodsFromServer.slice(0, 5))
      .then(setGoods);
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAllGoods}>Load all</button>
      <button type="button" onClick={loadRedGoods}>Load red</button>
      <button type="button" onClick={loadFirst5Goods}>Load first 5</button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;

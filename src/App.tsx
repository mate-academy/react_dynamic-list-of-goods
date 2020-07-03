import React, { useState } from 'react';
import './App.css';
import { getGoods, Goods } from './api';
import { GoodsList } from './GoodsList';

const App = () => {
  const [goods, setGoods] = useState<Goods[]>([]);
  const [isLoading, handleLoading] = useState<boolean>(false);

  const loadAllGoods = () => {
    handleLoading(true);

    getGoods()
      .then(setGoods);

    handleLoading(false);
  };

  const loadRedGoods = () => {
    handleLoading(true);

    getGoods()
      .then(goodsFromServer => goodsFromServer.filter(good => good.color === 'red'))
      .then(setGoods);

    handleLoading(false);
  };

  const firstFiveGoods = () => {
    const sortByName = (goodsFromServer: Goods[]) => {
      return [...goodsFromServer]
        .sort((a, b) => a.name.localeCompare(b.name));
    };

    handleLoading(true);

    getGoods()
      .then(sortByName)
      .then(goodsFromServer => goodsFromServer.slice(0, 5))
      .then(setGoods);

    handleLoading(false);
  };


  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAllGoods}>Load all</button>
      <button type="button" onClick={loadRedGoods}>Load red</button>
      <button type="button" onClick={firstFiveGoods}>Load 5 first</button>

      {isLoading
        ? <p>Loading...</p>
        : (<GoodsList goods={goods} />)}
    </>
  );
};

export default App;

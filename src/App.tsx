import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);


  const showAll = () => {
    getAll()
      .then((goodsFromServer) => {
        setGoods(goodsFromServer);
      });
  };

  const showFirstFive = () => {
    get5First()
      .then((goodsFromServer) => {
        setGoods(goodsFromServer);
      });
  };

  const showRedGoods = () => {
    getRedGoods()
      .then((goodsFromServer) => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button onClick={showAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={showFirstFive} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={showRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

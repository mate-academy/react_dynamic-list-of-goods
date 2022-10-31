import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoodsClick = () => {
    getAll()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const handle5FirstClick = () => {
    get5First()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const handleRedGoodsClick = () => {
    getRedGoods()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleRedGoodsClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

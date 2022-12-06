import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { get5First, getAll, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleClickForAllGoods = () => {
    getAll()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const handleClickForFirstFiveGoods = () => {
    get5First()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const handleClickForRedGoods = () => {
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
        onClick={() => handleClickForAllGoods()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleClickForFirstFiveGoods()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleClickForRedGoods()}
      >
        Load red goods
      </button>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};

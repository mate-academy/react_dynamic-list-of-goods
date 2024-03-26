import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [data, setData] = useState<Good[]>([]);

  const getAllGoodsFromServer = () => {
    getAll().then(goodsFromServer => {
      setData(goodsFromServer);
    });
  };

  const getFirstFiveGoods = () => {
    get5First().then(getFirstGoods => {
      setData(getFirstGoods);
    });
  };

  const getColoredRed = () => {
    getRedGoods().then(getRedGood => {
      setData(getRedGood);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoodsFromServer}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFirstFiveGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getColoredRed}>
        Load red goods
      </button>

      <GoodsList goods={data} />
    </div>
  );
};

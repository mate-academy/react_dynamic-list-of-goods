import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoodsFromServer = () => {
    return getAll().then((data) => setGoods(data));
  };

  const get5FirstFromServer = () => {
    return get5First().then((data) => setGoods(data));
  };

  const getRedGoodsFromServer = () => {
    return getRedGoods().then((data) => setGoods(data));
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
        onClick={get5FirstFromServer}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedGoodsFromServer}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

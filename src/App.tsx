import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  // useEffect(() => {
  //   getAll()
  //     .then(setGoods);
  // }, []);

  const getAllGoods = () => {
    getAll()
      .then(setGoods);
  };

  const getFirstFive = () => {
    get5First()
      .then(setGoods);
  };

  const getRedOnly = () => {
    getRedGoods()
      .then(setGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFirstFive}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getRedOnly}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

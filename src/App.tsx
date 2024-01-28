import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [preparedGoods, setPreparedGoods] = useState<Good[]>([]);

  useEffect(() => {
    getAll()
      .then((usersFromServer) => {
        setPreparedGoods(usersFromServer);
      });
  }, []);

  const handlerAllClick = () => {
    getAll()
      .then((usersFromServer) => {
        setPreparedGoods(usersFromServer);
      });
  };

  const handlerFiveClick = () => {
    get5First().then(goods => setPreparedGoods(goods));
  };

  const handlerRedClick = () => {
    getRedGoods().then(goods => setPreparedGoods(goods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handlerAllClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerFiveClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handlerRedClick}
      >
        Load red goods
      </button>

      <GoodsList goods={preparedGoods} />
    </div>
  );
};

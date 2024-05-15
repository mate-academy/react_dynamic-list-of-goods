import React, { useCallback, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onClickAll = useCallback(() => {
    getAll().then(res => {
      setGoods(res);
    });
  }, []);

  const onClickFive = useCallback(() => {
    get5First(setGoods);
  }, []);

  const onClickRed = useCallback(() => {
    getRedGoods(setGoods);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={onClickAll}>
        Load all goods
      </button>

      <button onClick={onClickFive} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={onClickRed} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

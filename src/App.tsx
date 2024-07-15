import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [list, setList] = useState<Good[]>([]);

  const onAll = async () => {
    setList(await getAll());
  };

  const onFirstFive = async () => {
    setList(await get5First());
  };

  const onRed = async () => {
    setList(await getRedGoods());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={onAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={onFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={onRed}>
        Load red goods
      </button>

      {list.length > 0 && <GoodsList goods={list} />}
    </div>
  );
};

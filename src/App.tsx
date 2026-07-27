import './App.scss';
import { GoodsList } from './GoodsList';
import React, { useState } from 'react';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [state, getState] = useState<Good[]>([]);

  const LikeFirst = () => {
    getAll().then(getState);
  };

  const LikeSecond = () => {
    get5First().then(getState);
  };

  const LikeThird = () => {
    getRedGoods().then(getState);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={LikeFirst}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={LikeSecond}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={LikeThird}>
        Load red goods
      </button>
      <div>
        <GoodsList goods={state} />
      </div>
    </div>
  );
};

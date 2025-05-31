import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const fetchAllGoods = () => {
    goodsAPI.getAll().then(setGoods);
  };

  const fetch5FirstGoods = () => {
    goodsAPI.get5First().then(setGoods);
  };

  const fetchRedColorGoods = () => {
    goodsAPI.getRedGoods('red').then(res => setGoods(res));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={fetchAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={fetch5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={fetchRedColorGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>();

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={async () => {
          await goodsAPI.getAll().then(goods => setVisibleGoods(goods));
        }}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={async () => {
          await goodsAPI.get5First().then(goods => setVisibleGoods(goods));
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={async () => {
          await goodsAPI.getRedGoods().then(goods => setVisibleGoods(goods));
        }}
      >
        Load red goods
      </button>

      {visibleGoods && <GoodsList goods={visibleGoods} />}
    </div>
  );
};

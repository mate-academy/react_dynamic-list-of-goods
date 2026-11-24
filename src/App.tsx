import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    goodsAPI.getAll().then((goods: Good[]) => {
      setVisibleGoods(goods);
    });
  };

  const handle5Goods = () => {
    goodsAPI.get5First().then((goods: Good[]) => {
      setVisibleGoods(goods);
    });
  };

  const handleRedGoods = () => {
    goodsAPI.getRedGoods().then((goods: Good[]) => {
      setVisibleGoods(goods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handle5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// or
// import * as goodsAPI from './api/goods';

const lol: Good[] = await getAll();
const sorted5Goods: Good[] = await get5First();
const redGoods: Good[] = await getRedGoods();

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const showAllGoods = () => {
    setAllGoods(lol);
  };

  const show5Goods = () => {
    setAllGoods(sorted5Goods);
  };

  const showRedGoods = () => {
    setAllGoods(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={showAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={show5Goods}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={showRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={allGoods} />
    </div>
  );
};

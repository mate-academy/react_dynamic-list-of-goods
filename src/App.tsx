import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const handleAllGoods = () => (
    getAll().then((goods) => setVisibleGoods(goods))
  );

  const handleFiveGoods = () => (
    get5First().then((goods) => setVisibleGoods(goods))
  );

  const hadleRedGoods = () => (
    getRedGoods().then(
      (
        goods: React.SetStateAction<Good[]>,
      ) => setVisibleGoods(goods),
    ));

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleFiveGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={hadleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

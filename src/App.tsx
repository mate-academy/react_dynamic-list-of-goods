import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import classnames from 'classnames';

import { GoodsList } from './components/goodsList/GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const gods = await getAll();

    setGoods(gods);
  };

  const loadSortedGoods = async () => {
    const sortedGoods = await get5First();

    setGoods(sortedGoods);
  };

  const loadFilteredGoods = async () => {
    const filteredGoods = await getRedGoods();

    setGoods(filteredGoods);
  };

  return (
    <div className="App content">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        className="button"
        data-cy="all-button"
        onClick={loadAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        className="button"
        data-cy="first-five-button"
        onClick={loadSortedGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        className="button"
        data-cy="red-button"
        onClick={loadFilteredGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

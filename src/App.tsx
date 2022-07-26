import React, { useState } from 'react';
import { GoodsList } from './GoodsList';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = async () => {
    return getAll()
      .then(all => setGoods(all));
  };

  const get5FirstGoods = async () => {
    return get5First()
      .then(fiveFirst => setGoods(fiveFirst));
  };

  const getAllRedGoods = async () => {
    return getRedGoods()
      .then(redOnly => setGoods(redOnly));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={getAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={get5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={getAllRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

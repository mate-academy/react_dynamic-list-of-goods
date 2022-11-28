import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getData = async (getGoods: () => Promise<Good[]>) => {
    try {
      await getGoods()
        .then(data => setGoods(data));
    } catch (err) {
      throw new Error(` Something bad happened: ${err}`);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getData(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => getData(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getData(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

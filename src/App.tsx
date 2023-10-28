import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRed } from './api/goods';

interface Goods {
  id: number;
  name: string;
  color: string;
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Goods[]>([]);

  const fetchData = async (condition?: string) => {
    let data;

    if (condition === 'index') {
      data = await get5First();
    } else if (condition === 'color') {
      data = await getRed();
    } else {
      data = await getAll();
    }

    setGoods(data);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => fetchData()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => fetchData('index')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => fetchData('color')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

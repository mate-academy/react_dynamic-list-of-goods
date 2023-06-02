import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [currentGoods, setCurrentGoods] = useState<Good[]>([]);

  async function handleButton(option?: string) {
    switch (option) {
      case 'first5': {
        const data = await get5First();

        setCurrentGoods(data);
        break;
      }

      case 'red': {
        const data = await getRedGoods();

        setCurrentGoods(data);
        break;
      }

      default: {
        const data = await getAll();

        setCurrentGoods(data);
      }
    }
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => (handleButton())}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => (handleButton('first5'))}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => (handleButton('red'))}
      >
        Load red goods
      </button>

      <GoodsList goods={currentGoods} />
    </div>
  );
};

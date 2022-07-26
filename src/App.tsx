import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = async (callback: () => Promise<Good[]>) => {
    const data = await callback();

    setGoods(data);
  };

  return (
    <div className="App">
      <h1 className="title">Dynamic list of Goods</h1>
      <div className="buttons">
        <button
          className="buttons__button"
          type="button"
          data-cy="all-button"
          onClick={() => loadGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          className="buttons__button"
          type="button"
          data-cy="first-five-button"
          onClick={() => loadGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          className="buttons__button"
          type="button"
          data-cy="red-button"
          onClick={() => loadGoods(getRedGoods)}
        >
          Load red goods
        </button>
      </div>

      <div className="content">
        <GoodsList goods={goods} />
      </div>
    </div>
  );
};

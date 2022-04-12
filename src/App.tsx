import React, { useState } from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.scss';

import { getAll, getFirst5Goods, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const chooseGoods = (getGoods: () => Promise<Good[]>) => {
    getGoods()
      .then(recievedGoods => setGoods(recievedGoods));
  };

  return (
    <div className="app">
      <h1 className="app__title">
        Dynamic list of Goods
      </h1>

      <div className="app__buttons">
        <button
          className="app__button"
          type="button"
          onClick={() => chooseGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          className="app__button"
          type="button"
          onClick={() => chooseGoods(getFirst5Goods)}
        >
          Load first 5 goods
        </button>

        <button
          className="app__button"
          type="button"
          onClick={() => chooseGoods(getRedGoods)}
        >
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

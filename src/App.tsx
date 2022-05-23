import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRed } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const pickGoods = (getGoods: () => Promise<Good[]>) => {
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
          className="app__button glow-on-hover"
          type="button"
          onClick={() => pickGoods(getAll)}
        >
          Load All goods
        </button>

        <button
          className="app__button glow-on-hover"
          type="button"
          onClick={() => pickGoods(get5First)}
        >
          Load first 5 goods
        </button>

        <button
          className="app__button glow-on-hover"
          type="button"
          onClick={() => pickGoods(getRed)}
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="app">
      <h1 className="app__title">
        Dynamic list of Goods
      </h1>

      <GoodsList goods={goods} />

      <div className="app__buttons">
        <button
          type="button"
          onClick={async () => {
            setGoods(await goodsAPI.getAll());
          }}
          className="app__button"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={async () => {
            setGoods(await goodsAPI.get5First());
          }}
          className="app__button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={async () => {
            setGoods(await goodsAPI.getRedGoods());
          }}
          className="app__button"
        >
          Load red goods
        </button>
      </div>
    </div>
  );
};

export default App;

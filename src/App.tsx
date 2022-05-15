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
          onClick={() => {
            goodsAPI.getAll()
              .then(newGoods => {
                setGoods(newGoods);
              });
          }}
          className="app__button"
        >
          Load All goods
        </button>

        <button
          type="button"
          onClick={() => {
            goodsAPI.get5First()
              .then(newGoods => {
                setGoods(newGoods);
              });
          }}
          className="app__button"
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          onClick={() => {
            goodsAPI.getRedGoods()
              .then(newGoods => {
                setGoods(newGoods);
              });
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

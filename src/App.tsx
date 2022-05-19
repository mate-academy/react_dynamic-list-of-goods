import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components';

import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Array<Good>>([]);

  return (
    <div className="app">
      <h1 className="app__title">
        Dynamic list of Goods
      </h1>

      <GoodsList
        goods={goods}
      />

      <div className="app__btns_container">
        <button
          className="app__button"
          type="button"
          onClick={() => {
            goodsAPI.getAll()
              .then(newGoods => {
                setGoods(newGoods);
              });
          }}
        >
          All goods
        </button>

        <button
          className="app__button"
          type="button"
          onClick={() => {
            goodsAPI.get5First()
              .then(newGoods => {
                setGoods(newGoods);
              });
          }}
        >
          Five first goods
        </button>

        <button
          className="app__button"
          type="button"
          onClick={() => {
            goodsAPI.getRedGoods()
              .then(newGoods => {
                setGoods(newGoods);
              });
          }}
        >
          Only red goods
        </button>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.scss';

import { GoodsList } from './components/GoodList';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>();

  return (
    <div className="app box">
      <h1
        className="title is-3"
      >
        Dynamic list of Goods
      </h1>

      {goods && (
        <GoodsList goods={goods} />)}

      <div className="app__buttons">
        <button
          className="button is-primary"
          type="button"
          onClick={() => {
            getAll().then(goodsFromServer => {
              setGoods(goodsFromServer);
            });
          }}

        >
          all
        </button>

        <button
          className="button is-primary"
          type="button"
          onClick={() => {
            get5First().then(goodsFromServer => {
              setGoods(goodsFromServer);
            });
          }}

        >
          5
        </button>

        <button
          className="button is-primary"
          type="button"
          onClick={() => {
            getRedGoods().then(goodsFromServer => {
              setGoods(goodsFromServer);
            });
          }}

        >
          red
        </button>
      </div>

    </div>

  );
};

export default App;

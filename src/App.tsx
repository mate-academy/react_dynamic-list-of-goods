import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const allGoods = () => {
    getAll().then(result => setGoods(result));
  };

  const first5Goods = () => {
    get5First().then(result => setGoods(result));
  };

  const redGoods = () => {
    getRedGoods('red').then(result => setGoods(result));
  };

  return (
    <div>
      {/* <h1>Dynamic list of Goods</h1> */}

      <button
        type="button"
        className="button"
        onClick={() => {
          allGoods();
        }}
      >
        Load All goods
      </button>

      <button
        type="button"
        className="button"
        onClick={() => {
          first5Goods();
        }}
      >
        Load 5 first
      </button>

      <button
        type="button"
        className="button"
        onClick={() => {
          redGoods();
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

    </div>
  );
};

export default App;

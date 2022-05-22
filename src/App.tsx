import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';

import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => {
          getAll()
            .then(allGoods => {
              setGoods(allGoods);
            });
        }}
      >
        All goods
      </button>
      <button
        type="button"
        onClick={() => {
          get5First()
            .then(fiveFirstGoods => {
              setGoods(fiveFirstGoods);
            });
        }}
      >
        5 first goods
      </button>
      <button
        type="button"
        onClick={() => {
          getRedGoods()
            .then((onlyRedGoods) => {
              setGoods(onlyRedGoods);
            });
        }}
      >
        Red goods
      </button>

      <GoodsList goods={goods} />

    </div>
  );
};

export default App;

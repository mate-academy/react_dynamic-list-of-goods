import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => {
          getAll()
            .then(goodsFromServer => {
              setGoods(goodsFromServer);
            });
        }}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={() => {
          get5First()
            .then(goodsFromServer => {
              setGoods(goodsFromServer);
            });
        }}
      >
        Load first 5 goods
      </button>
      <button
        type="button"
        onClick={() => {
          getRedGoods()
            .then(goodsFromServer => {
              setGoods(goodsFromServer);
            });
        }}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;

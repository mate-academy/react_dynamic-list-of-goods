import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1 className="App__title">
        Dynamic list of Goods
      </h1>

      <GoodsList goods={goods} />

      <button
        className="App__button"
        type="button"
        onClick={async () => {
          setGoods(await goodsAPI.getAll());
        }}
      >
        Load All Goods
      </button>

      <button
        className="App__button"
        type="button"
        onClick={async () => {
          setGoods(await goodsAPI.get5First());
        }}
      >
        Load 5 First
      </button>

      <button
        className="App__button"
        type="button"
        onClick={async () => {
          setGoods(await goodsAPI.getRedGoods());
        }}
      >
        Load Red Goods
      </button>
    </div>
  );
};

export default App;

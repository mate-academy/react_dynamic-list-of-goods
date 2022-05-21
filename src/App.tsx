import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="app">
      <h1 className="app__title">
        Dynamic list of Goods
      </h1>
      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}

      <button
        type="button"
        className="button"
        onClick={async () => {
          setGoods(await goodsAPI.getAll());
        }}
      >
        Load All goods
      </button>
      <button
        type="button"
        className="button"
        onClick={async () => {
          setGoods(await goodsAPI.getFirstFive());
        }}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        className="button"
        onClick={async () => {
          setGoods(await goodsAPI.getRedGoods());
        }}
      >
        Load red goods
      </button>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const allGoods = await goodsAPI.getAll();

    setGoods(allGoods);
  };

  const loadFiceFirstGoods = async () => {
    const fiveFirst = await goodsAPI.get5First();

    setGoods(fiveFirst);
  };

  const loadRedGoods = async () => {
    const red = await goodsAPI.getRedGoods();

    setGoods(red);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button type="button" data-cy="all-button" onClick={loadAllGoods}>
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={loadFiceFirstGoods}
        >
          Load 5 first goods
        </button>

        <button type="button" data-cy="red-button" onClick={loadRedGoods}>
          Load red goods
        </button>
      </div>

      <GoodsList goods={goods} />
    </div>
  );
};

export default App;

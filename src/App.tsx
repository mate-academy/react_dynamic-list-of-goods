import React, { useState } from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const loadedGoods = await getAll();

    setGoods(loadedGoods);
  };

  const loadFirst5Goods = async () => {
    const loadedGoods = await get5First();

    setGoods(loadedGoods);
  };

  const loadAllRedGoods = async () => {
    const loadedGoods = await getRedGoods();

    setGoods(loadedGoods);
  };

  return (
    <div className="has-text-centered">
      <h1 className="title">Dynamic list of Goods</h1>

      <div>
        <button
          type="button"
          className="button is-info mx-3"
          onClick={() => loadAllGoods()}
        >
          Load all goods
        </button>
        <button
          type="button"
          className="button is-info mx-3"
          onClick={() => loadFirst5Goods()}
        >
          Load 5 first goods
        </button>
        <button
          type="button"
          className="button is-info mx-3"
          onClick={() => loadAllRedGoods()}
        >
          Load red goods
        </button>
      </div>

      <div>
        <GoodsList goods={goods} />
      </div>
    </div>
  );
};

export default App;

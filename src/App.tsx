import React, { useCallback, useState } from 'react';
import './App.scss';
import 'bulma';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './Components/GoodsList';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAllGoods = useCallback(
    async () => {
      const loadedGoods = await getAll();

      setGoods(loadedGoods);
    },
    [],
  );

  const loadFirst5Goods = useCallback(
    async () => {
      const loadedGoods = await get5First();

      setGoods(loadedGoods);
    },
    [],
  );

  const loadRedGoods = useCallback(
    async () => {
      const loadedGoods = await getRed();

      setGoods(loadedGoods);
    },
    [],
  );

  return (
    <div className="has-text-centered">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        type="button"
        className="button is-dark mx-2"
        onClick={() => loadAllGoods()}
      >
        All
      </button>

      <button
        type="button"
        className="button is-dark mx-2"
        onClick={() => loadFirst5Goods()}
      >
        5
      </button>

      <button
        type="button"
        className="button is-dark mx-2"
        onClick={() => loadRedGoods()}
      >
        Red
      </button>

      <div>
        <GoodsList goods={goods} />
      </div>
    </div>
  );
};

export default App;

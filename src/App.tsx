import React, { useState, useEffect } from 'react';
import { Good, LoadOption } from './types';
import { GoodsList } from './GoodsList';
import './App.scss';

import { getAllGoods, getFirst5Goods, getRedGoods } from './api/goods';

export const App: React.FC = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loadOption, setLoadOption] = useState(LoadOption.None);

  useEffect(() => {
    switch (loadOption) {
      case LoadOption.AllGoods:
        getAllGoods().then(setGoods);
        break;
      case LoadOption.OnlyFirst5Goods:
        getFirst5Goods().then(setGoods);
        break;
      case LoadOption.OnlyRedGoods:
        getRedGoods().then(setGoods);
        break;
      default:
        setGoods([]);
        break;
    }
  }, [loadOption]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setLoadOption(LoadOption.AllGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setLoadOption(LoadOption.OnlyFirst5Goods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setLoadOption(LoadOption.OnlyRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
});

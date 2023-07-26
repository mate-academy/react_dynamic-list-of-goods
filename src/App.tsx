import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import * as goodsAPI from './api/goods';

enum LoadOptions {
  All = 'all',
  First5 = 'first5',
  LoadByRedColor = 'red',
}

export const App: React.FC = () => {
  const [good, setGood] = useState<Good[]>([]);
  const [loadOption, setLoadOption] = useState<LoadOptions | null>(null);

  useEffect(() => {
    switch (loadOption) {
      case LoadOptions.All:
        goodsAPI.getAll().then(setGood);
        break;
      case LoadOptions.First5:
        goodsAPI.get5First().then(setGood);
        break;
      case LoadOptions.LoadByRedColor:
        goodsAPI.getRedGoods().then(setGood);
        break;
      default:
        setLoadOption(null);
    }
  }, [loadOption]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setLoadOption(LoadOptions.All)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setLoadOption(LoadOptions.First5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setLoadOption(LoadOptions.LoadByRedColor)}
      >
        Load red goods
      </button>

      {loadOption && (
        <GoodsList goods={good} />
      )}
    </div>
  );
};

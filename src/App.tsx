import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

type LoadOption = 'All' | 'Five' | 'Red';

export const App: React.FC = () => {
  const [goodList, setGoodList] = useState<Good[]>([]);
  const [option, setOption] = useState<LoadOption>();

  useEffect(() => {
    switch (option) {
      case 'All':
        getAll().then(setGoodList);
        break;
      case 'Five':
        get5First().then(setGoodList);
        break;
      case 'Red':
        getRedGoods().then(setGoodList);
        break;
    }
  }, [option]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => setOption('All')}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => setOption('Five')}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => setOption('Red')}
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goodList} />
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

const SWITCHER_STATUS_ALL = 'all';
const SWITCHER_STATUS_5FIRST = '5 first';
const SWITCHER_STATUS_RED = 'red';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [switcher, setSwitcher] = useState('');

  useEffect(() => {
    if (switcher === SWITCHER_STATUS_ALL) {
      getAll().then(goodsFromServer =>
        setGoods(goodsFromServer.filter(good => good.name)),
      );
    }

    if (switcher === SWITCHER_STATUS_5FIRST) {
      get5First().then(setGoods);
    }

    if (switcher === SWITCHER_STATUS_RED) {
      getRedGoods().then(setGoods);
    }
  }, [switcher]);

  function switchOn(mode: string) {
    setSwitcher(mode);
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => switchOn(SWITCHER_STATUS_ALL)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => switchOn(SWITCHER_STATUS_5FIRST)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => switchOn(SWITCHER_STATUS_RED)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

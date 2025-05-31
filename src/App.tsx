import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [reload, setReload] = useState('');
  const [goods, setGoods] = useState<Good[]>([]);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;

      return;
    }

    switch (reload) {
      case 'all':
        getAll().then(setGoods);
        break;
      case '5first':
        get5First().then(setGoods);
        break;
      case 'red':
        getRedGoods().then(setGoods);
        break;
      default:
        getAll().then(setGoods);
        break;
    }
  }, [reload]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setReload('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setReload('5first')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setReload('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

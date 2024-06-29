import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

const GOODS_ALL = 'all-button';
const GOODS_FIVE = 'first-five-button';
const GOODS_RED = 'red-button';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [option, setOption] = useState('');

  useEffect(() => {
    switch (option) {
      case GOODS_FIVE: {
        get5First().then(setGoods);
        break;
      }

      case GOODS_RED: {
        getRedGoods().then(setGoods);
        break;
      }

      case GOODS_ALL: {
        getAll().then(r => {
          setGoods(r);
        });
        break;
      }
    }
  }, [option]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const sortField = e.currentTarget.dataset.cy as string;

    setOption(sortField);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleClick}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handleClick}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleClick}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

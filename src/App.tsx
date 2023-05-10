import React, { useCallback, useState } from 'react';
import './App.scss';
import _ from 'lodash';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

import { Good } from './types/Good';

type GetAllFunc = () => Promise<Good[]>;

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const loadGoods = useCallback(async (getAllFunc: GetAllFunc) => {
    try {
      const goods = await getAllFunc();

      setVisibleGoods(prevVisibleGoods => {
        return _.isEqual(prevVisibleGoods, goods)
          ? prevVisibleGoods
          : goods;
      });
    } catch {
      throw new Error('Error while loading goods');
    }
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={visibleGoods} />
    </div>
  );
};

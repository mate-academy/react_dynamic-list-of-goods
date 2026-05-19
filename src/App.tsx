import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from '../src/types/Good';

// import { getAll, get5First, getRed } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [listOfGoods, setListOfGoods] = useState<Good[]>([]);

  const goodsGetter = async (type: () => Promise<Good[]>) => {
    try {
      const goods = await type();

      setListOfGoods(goods);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => goodsGetter(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => goodsGetter(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => goodsGetter(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={listOfGoods} />
    </div>
  );
};

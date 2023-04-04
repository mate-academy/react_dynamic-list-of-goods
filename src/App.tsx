import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

enum FilterOptions {
  all,
  first5,
  red,
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const visibleGoods = async (filterOption: FilterOptions) => {
    let goodsList: Good[];

    switch (filterOption) {
      case FilterOptions.all:
        goodsList = await goodsAPI.getAll();
        break;

      case FilterOptions.first5:
        goodsList = await goodsAPI.get5First();
        break;

      case FilterOptions.red:
        goodsList = await goodsAPI.getRedGoods();
        break;

      default:
        throw new Error('Unexpected type');
    }

    setGoods(goodsList);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => visibleGoods(FilterOptions.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => visibleGoods(FilterOptions.first5)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => visibleGoods(FilterOptions.red)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

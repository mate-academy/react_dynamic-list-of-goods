import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const visibleGoods = async (type: string) => {
    let goodsList: Good[];

    switch (type) {
      case 'all':
        goodsList = await goodsAPI.getAll();
        break;

      case 'first5':
        goodsList = await goodsAPI.get5First();
        break;

      case 'red':
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
        onClick={() => visibleGoods('all')}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => visibleGoods('first5')}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => visibleGoods('red')}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

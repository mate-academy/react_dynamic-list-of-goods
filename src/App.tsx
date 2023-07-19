import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | null>(null);

  const onGetGoodsClick = async (fetchFunc: () => Promise<Good[]>) => {
    try {
      const responseFromAPI = await fetchFunc();

      if (responseFromAPI as Good[]) {
        const allGoods = responseFromAPI as Good[];

        setGoods(allGoods);
      }
    } catch {
      throw new Error('Goods are not found');
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => onGetGoodsClick(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => onGetGoodsClick(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => onGetGoodsClick(getRedGoods)}
      >
        Load red goods
      </button>

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};

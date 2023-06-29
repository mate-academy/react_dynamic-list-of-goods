import React, { useState } from 'react';
import 'bulma';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Callback } from './types/Callback';

export const App: React.FC = () => {
  const [visibleGoods, setVisibleGoods] = useState<Good[]>([]);

  const getGoods = async (callback: Callback) => {
    const goods = await callback();

    setVisibleGoods(goods);
  };

  return (
    <div className="App box content">
      <h1>Dynamic list of Goods</h1>
      <div className="buttons">
        <button
          type="button"
          className="button is-info"
          data-cy="all-button"
          onClick={() => getGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-info"
          data-cy="first-five-button"
          onClick={() => getGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-info"
          data-cy="red-button"
          onClick={() => getGoods(getRedGoods)}
        >
          Load red goods
        </button>
      </div>
      <GoodsList goods={visibleGoods} />
    </div>
  );
};

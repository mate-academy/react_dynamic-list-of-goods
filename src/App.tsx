import { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { get5First, getAll, getRed } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const displayGoods = (getGoods: () => Promise<Good[]>) => () => {
    getGoods().then((receivedGoods) => {
      setGoods(receivedGoods);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={displayGoods(getAll)}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={displayGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={displayGoods(getRed)}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

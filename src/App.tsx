import React, { useMemo, useState } from 'react';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const displayedGoods = useMemo(() => {
    return (goodsFromServer: Promise<Good[]>) => {
      return goodsFromServer.then(setGoods);
    };
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => displayedGoods(getAll())}
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        type="button"
        onClick={() => displayedGoods(get5First())}
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => displayedGoods(getRedGoods())}
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

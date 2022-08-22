import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  function loadGoodsByCondition(request: () => Promise<Good[]>) {
    request().then(visibleGoods => setGoods(visibleGoods));
  }

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadGoodsByCondition(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => loadGoodsByCondition(get5First)}

      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadGoodsByCondition(getRedGoods)}
      >
        Load red goods
      </button>

      {goods && <GoodsList goods={goods} />}
    </div>
  );
};

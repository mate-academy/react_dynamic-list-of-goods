import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [visible, setVisible] = useState(false);

  const loadGoods = (getter: () => Promise<Good[]>) => {
    getter().then(setGoods);
    setVisible(true);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => loadGoods(getAll)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => loadGoods(get5First)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => loadGoods(getRedGoods)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      {visible && <GoodsList goods={goods} />}
    </div>
  );
};

import React, { useState, useCallback } from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './component/GoodsList';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = useCallback((callBack: () => Promise<Good[]>) => {
    callBack()
      .then((good) => setGoods(good));
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => getGoods(getAll)}
      >
        Load All goods
      </button>
      <button
        type="button"
        onClick={() => getGoods(get5First)}
      >
        Load 5 first goods
      </button>
      <button
        type="button"
        onClick={() => getGoods(getRedGoods)}
      >
        Load red goods
      </button>
      <GoodsList goods={goods} />
    </>
  );
};

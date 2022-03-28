import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const goodHandle = (whatToGet: () => Promise<Good[]>) => {
    whatToGet()
      .then((goodsFromServer: React.SetStateAction<Good[]>) => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        onClick={() => {
          goodHandle(getAll);
        }}
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={() => {
          goodHandle(get5First);
        }}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => {
          goodHandle(getRedGoods);
        }}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;

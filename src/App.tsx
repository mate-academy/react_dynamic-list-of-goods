import React, { useState } from 'react';
import { GoodsList } from './componets/GoodsList';
import './App.scss';

import { get5First, getAll, getRedGoods } from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const goodHandle = (whatToGet: () => Promise<Good[]>) => {
    whatToGet()
      .then((goodsFromServer: React.SetStateAction<Good[]>) => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => {
          goodHandle(getAll);
        }}
      >
        loadAll
      </button>
      <button
        type="button"
        onClick={() => {
          goodHandle(get5First);
        }}
      >
        load 5
      </button>
      <button
        type="button"
        onClick={() => {
          goodHandle(getRedGoods);
        }}
      >
        load red
      </button>
      <GoodsList goods={goods} />
    </div>
  );
};

export default App;

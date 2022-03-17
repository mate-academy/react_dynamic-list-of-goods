import React, { useState } from 'react';
import './App.scss';

import {
  getAll,
  get5First,
  getRedGoods,
  getGreenGoods,
} from './api/goods';
import { GoodsList } from './components/GoodsList';

type GoodsGetterFunction = () => Promise<Good[]>;

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadGoods = (goodsGetterFunction: GoodsGetterFunction) => {
    goodsGetterFunction()
      .then(goodsFromServer => (
        setGoods(goodsFromServer)
      ));
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => loadGoods(getAll)}
      >
        Load All goods
      </button>

      <button
        type="button"
        onClick={() => loadGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        onClick={() => loadGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <button
        type="button"
        onClick={() => loadGoods(getGreenGoods)}
      >
        Load green goods
      </button>

      <GoodsList goods={goods} />
    </>
  );
};

export default App;

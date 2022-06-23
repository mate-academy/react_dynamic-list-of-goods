import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';
import { Good } from './react-app-env';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  // functions for buttons

  type CallbackGoods = () => Promise<Good[]>;

  const chooseGoods = (callback: CallbackGoods) => {
    callback()
      .then(products => {
        setGoods(products);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>
      <button
        type="button"
        onClick={() => chooseGoods(getAll)}
      >
        all
      </button>

      <button
        type="button"
        onClick={() => chooseGoods(get5First)}
      >
        5
      </button>

      <button
        type="button"
        onClick={() => chooseGoods(getRedGoods)}
      >
        red
      </button>

      {goods.length > 0 && (
        <GoodsList goods={goods} />
      )}
    </>
  );
};

export default App;

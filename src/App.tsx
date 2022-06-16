import React, { useState } from 'react';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './react-app-env';
import { GoodsList } from './components/GoodsList';

import './App.scss';

type CallBack = () => Promise<Good[]>;

const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);

  const getGoods = (callBack: CallBack) => {
    callBack()
      .then(goodsFromServer => {
        setAllGoods(goodsFromServer);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      {allGoods && (
        <GoodsList allGoods={allGoods} />
      )}

      <button
        type="button"
        onClick={() => getGoods(getAll)}
      >
        Load all goods
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

    </>
  );
};

export default App;

import React, { useState } from 'react';
import { GoodsList } from './Components/GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './react-app-env';

import './App.scss';

const App: React.FC = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onLoadAllGoods = () => {
    getAll().then(goodArray => setGoods(goodArray));
  };

  const onLoad5Goods = () => {
    get5First().then(goodArray => setGoods(goodArray));
  };

  const onLoadRedGoods = () => {
    getRedGoods().then(goodArray => setGoods(goodArray));
  };

  return (
    <div className="container">
      <h1 className="title">Dynamic list of Goods</h1>

      <GoodsList visibleGoods={goods} />

      <button
        className="button is-link is-outlined"
        type="button"
        onClick={onLoadAllGoods}
      >
        Load All goods
      </button>

      <button
        className="button is-link is-outlined"
        type="button"
        onClick={onLoad5Goods}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-link is-outlined"
        type="button"
        onClick={onLoadRedGoods}
      >
        Load red goods
      </button>
    </div>
  );
});

export default App;

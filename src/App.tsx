import React, { useState } from 'react';
import './App.scss';

import { getAll, get5First, getRed } from './api/goods';
import { GoodsList } from './components/GoodsList';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll().then(allGoods => setGoods(allGoods));
  };

  const getFiveGoods = () => {
    get5First().then(fiveGoods => setGoods(fiveGoods));
  };

  const getRedGoods = () => {
    getRed().then(redGoods => setGoods(redGoods));
  };

  // eslint-disable-next-line no-console
  console.log(goods);

  return (
    <>
      <h1
        className="title"
      >
        Dynamic list of Goods
      </h1>

      <div
        className="btn-container"
      >
        <button
          type="button"
          className="button is-info"
          onClick={getAllGoods}
        >
          Load All goods
        </button>
        <button
          type="button"
          className="button is-info"
          onClick={getFiveGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-info"
          onClick={getRedGoods}
        >
          Load red
        </button>
      </div>

      <ul>
        <GoodsList goods={goods} />
      </ul>
    </>
  );
};

export default App;

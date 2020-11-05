import React, { useState } from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';
// or
// import * as goodsAPI from './api/goods';

const App = () => {
  const [goods, setGoods] = useState([]);

  return (
    <div className="App">
      <h1 classNmae="App__name">Dynamic list of Goods</h1>
      <div className="App__goods goods">
        <GoodList
          goods={goods}
          className="goods__list"
        />
        <div className="goods__button">
          <button
            type="button"
            className="button is-primary"
            onClick={async() => setGoods(await getAll())}
          >
            Load all goods
          </button>

          <button
            type="button"
            className="button is-primary"
            onClick={async() => setGoods(await get5First())}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className="button is-primary"
            onClick={async() => setGoods(await getRedGoods())}
          >
            Load red goods
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

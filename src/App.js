import React, { useState } from 'react';

import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodList } from './components/GoodList';
import { ButtonGoods } from './components/ButtonGoods';
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
          <ButtonGoods
            name={getAll}
            setGoods={setGoods}
            title="Load all goods"
          />

          <ButtonGoods
            name={get5First}
            setGoods={setGoods}
            title="Load 5 first goods"
          />

          <ButtonGoods
            name={getRedGoods}
            setGoods={setGoods}
            title="Load red goods"
          />
        </div>
      </div>
    </div>
  );
};

export default App;

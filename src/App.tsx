import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const showAll = () => {
    getAll()
      .then(gottenGoods => {
        setGoods(gottenGoods);
      });
  };

  const show5First = () => {
    get5First()
      .then((selectedGoods: Good[]) => {
        setGoods(selectedGoods);
      });
  };

  const showRed = () => {
    getRedGoods()
      .then(selectedGoods => {
        setGoods(selectedGoods);
      });
  };

  return (
    <div className="app">
      <h1 className="app__title">
        Dynamic list of Goods
      </h1>
      <div className="app__container">
        <GoodsList
          goods={goods}
        />
        <div className="app__buttons">
          <button
            className="app__addAll
            button"
            type="button"
            onClick={showAll}
          >
            Load All goods
          </button>
          <button
            className="app__addFirst5
            button"
            type="button"
            onClick={show5First}
          >
            Load 5 first goods
          </button>
          <button
            className="app__addRed
            button"
            type="button"
            onClick={showRed}
          >
            Load red goods
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
